import { Injectable, signal, Signal } from '@angular/core';
import { rxState } from '@rx-angular/state';
import { CartStoreState } from '../states/cart-store.state';
import { BuyCartItem, OrderCartItem } from '../types/order-cart-item.type';

const initialState: CartStoreState = {
  promoCode: '',
  cart: [],
}

function buy({ cart }: CartStoreState, { idx, product, quantity }: BuyCartItem) {
  if (idx >= 0) {
    cart[idx] = {
      ...cart[idx],
      quantity: cart[idx].quantity + quantity,
    }
    return cart;
  }

  return [...cart, { ...product, quantity }];
}

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  orderCartItem = signal<OrderCartItem | null>(null);
  promoCode = signal<string>('');
  
  private state = rxState<CartStoreState>(({ set, connect }) => {
    // set initial statement
    set(initialState);
    connect('cart', this.orderCartItem, (state, value) => {
      if (!value) {
        return state.cart;
      }

      const isRemove = value.action === 'remove' || value.action === 'update' && value.quantity <= 0;
      if (value.action === 'buy') {
        return buy(state, value);
      } else if (value.action === 'update' && value.quantity > 0) {
        return state.cart.map((item) => 
          item.id === value.id ? { ...item, quantity: value.quantity } : item);
      } else if (isRemove) {
        return state.cart.filter((item) => item.id !== value.id);
      }

      return state.cart;
    });
    connect('promoCode', this.promoCode)
  });

  cart = this.state.signal('cart');

  discountPercent = this.state.computed(({ promoCode }) => {
    if (promoCode() === 'DEVFESTHK2023') {  
      return 0.1;
    } else if (promoCode() === 'ANGULARNATION') {
      return 0.2;
    }

    return 0;
  }) as Signal<number>;

  summary = this.state.computed(({ cart }) => {
    const results = cart().reduce(({ quantity, subtotal }, item) => 
      ({ 
        quantity: quantity + item.quantity,
        subtotal: subtotal + item.price * item.quantity
      }), { quantity: 0, subtotal: 0 });

    const { subtotal, quantity } = results;
    const discount = subtotal * this.discountPercent();
    const total = subtotal - discount; 

    return { 
      quantity, 
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      total: total.toFixed(2),
    }
  });
}
