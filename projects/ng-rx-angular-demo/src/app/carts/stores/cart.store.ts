import { Injectable, Signal } from '@angular/core';
import { rxState } from '@rx-angular/state';
import { Product } from '../../products/interfaces/product.interface';
import { CartStoreState } from '../states/cart-store.state';
import { CartItem } from '../types/cart-item.type';

const initialState: CartStoreState = {
  promoCode: '',
  cart: [],
}

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private state = rxState<CartStoreState>(({ set }) => {
    // set initial statement
    set(initialState);
  });
  
  signal: typeof this.state.signal = this.state.signal.bind(this.state);
  
  set: typeof this.state.set = this.state.set.bind(this.state);

  discountPercent = this.state.computed(({ promoCode }) => {
    if (promoCode() === 'DEVFESTHK2023') {  
      return 0.1;
    } else if (promoCode() === 'ANGULARNATION') {
      return 0.2;
    }

    return 0;
  }) as Signal<number>;

  summary = this.state.computed(({ cart }) => {
    const results = cart().reduce(({ quantity, subtotal }, item) => {
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

  buy(idx: number, product: Product, quantity: number): void {
    let newCart: CartItem[] = [];
    const cart = this.state.signal('cart');

    if (idx >= 0) {
      newCart = cart().map((item, i) => {
        if (i === idx) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          }
        }
        return item;``
      });
    } else {
      newCart = [...cart(), { ...product, quantity } ];
    }

    this.state.set({ cart: newCart });
  }

  remove(id: number): void {
    const oldCart = this.state.signal('cart');
    const cart = oldCart().filter((item) => item.id !== id);
    this.state.set({ cart });
  } 

  update(id: number, quantity: number): void {  
    const oldCart = this.state.signal('cart');
    
    if (quantity <= 0) {
      const cart = oldCart().filter((item) => item.id !== id);
      this.state.set({ cart });
    } else {
      const cart = oldCart().map((item) => 
        item.id === id ? { ...item, quantity} : item 
      );

      this.state.set({ cart });
    }
  }
}
