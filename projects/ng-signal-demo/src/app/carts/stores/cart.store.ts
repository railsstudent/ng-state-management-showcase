import { CartStoreState } from '../states/cart-store.state';
import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';
import { CartItem } from '../types/cart-item.type';

const initialState: CartStoreState = {
  promoCode: '',
  cart: [],
}

function updateCart(cart: CartItem[], productId: number, quantity: number): CartItem[] {
  if (quantity <= 0) {
    return cart.filter((item) => item.id !== productId);
  }
    
  return cart.map((item) => 
    item.id === productId ? { ...item, quantity} : item 
  );
}

function addCart(oldCart: CartItem[], idx: number, product: Product, quantity: number): CartItem[] {
  if (idx >= 0) {
    return oldCart.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          quantity: item.quantity + quantity,
        }
      }
      return item;
    });
  }
  
  return [...oldCart, { ...product, quantity } ];
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
    const results = this.state().cart.reduce(({ quantity, subtotal }, item) => ({ 
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

  updatePromoCode(promoCode: string): void {
    this.state.update((oldState) => ({ ...oldState, promoCode }));
  }

  buy(idx: number, product: Product, quantity: number): void {
    this.state.update(({ cart: oldCart, promoCode}) => {
      const newCart = addCart(oldCart, idx, product, quantity);
      return {
        promoCode,
        cart: newCart,
      }
    });
  }

  update(id: number, quantity: number): void {
    this.state.update(({ promoCode, cart: oldCart }) => {
      const cart = updateCart(oldCart, id, quantity);
      return { 
        promoCode,
        cart 
      };
    });
  }
}
