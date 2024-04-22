import { CartStoreState } from '../states/cart-store.state';
import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';
import { CartItem } from '../types/cart-item.type';

const initialState: CartStoreState = {
  promoCode: '',
  cart: [],
}

function updateCartItem(cart: CartItem[], id: number, quantity: number) {
  if (quantity <= 0) {
    return cart.filter((item) => item.id !== id);
  }
  
  return cart.map((item) => 
    item.id === id ? { ...item, quantity} : item 
  );
}

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  state = signal(initialState);

  cart = computed(() => this.state().cart);

  promoCode = computed(() => this.state().promoCode);

  discountPercent = computed(() => {
    if (this.promoCode() === 'DEVFESTHK2023') {
        return 0.1;
    } else if (this.promoCode() === 'ANGULARNATION') {
      return 0.2;
    }

    return 0;
  });

  summary = computed(() => {
    const results = this.state().cart.reduce(({ quantity, subtotal }, item) => {
      const newQuantity = quantity + item.quantity;
      const newSubtotal = subtotal + item.price * item.quantity;

      return { 
        quantity: newQuantity,
        subtotal: newSubtotal
      }
    }, { quantity: 0, subtotal: 0 });

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

  updatePromoCode(promoCode: string): void {
    this.state.update((oldState) => ({ ...oldState, promoCode }));
  }

  buy(idx: number, product: Product, quantity: number): void {
    this.state.update((oldState) => {
      let newCart: CartItem[] = [];
      if (idx >= 0) {
        newCart = oldState.cart.map((item, i) => {
          if (i === idx) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            }
          }
          return item;``
        });
      } else {
        newCart = [...this.state().cart, { ...product, quantity } ];
      }

      return {
        ...oldState,
        cart: newCart,
      }
    });
  }

  remove(id: number): void {
    this.state.update((oldState) => {
      const cart = updateCartItem(oldState.cart, id, 0);

      return {
        ...oldState,
        cart,
      }
    });
  }

  update(id: number, quantity: number): void {
    this.state.update((oldState) => {
      const cart = updateCartItem(oldState.cart, id, quantity);
      return { 
        ...oldState,
        cart 
      };
    });
  }
}
