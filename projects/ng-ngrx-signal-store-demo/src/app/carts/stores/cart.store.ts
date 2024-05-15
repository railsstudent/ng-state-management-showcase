import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Product } from '../../products/interfaces/product.interface';
import { CartStoreState } from '../states/cart-store.state';

const initialState: CartStoreState = {
  promoCode: '',
  cart: [],
}

function updateCart({ cart }: CartStoreState,productId: number, quantity: number) {
  if (quantity <= 0) {
    return cart.filter((item) => item.id !== productId);
  } 
    
  return cart.map((item) => 
    item.id === productId ? { ...item, quantity} : item 
  );
}

function addCart({ cart }: CartStoreState, idx: number, product: Product, quantity: number) {
  if (idx >= 0) {
    return cart.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          quantity: item.quantity + quantity,
        }
      }
      return item;``
    });
  } 
  
  return [...cart, { ...product, quantity } ];
}

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ promoCode }) => ({
    discountPercent: computed(() => {
      if (promoCode() === 'DEVFESTHK2023') {
        return 0.1;
      } else if (promoCode() === 'ANGULARNATION') {
        return 0.2;
      }

      return 0;
    }),
  })),
  withComputed(({ discountPercent, cart }) => {
    return {
      summary: computed(() => {
        const results = cart().reduce(({ quantity, subtotal }, item) => {
          const newQuantity = quantity + item.quantity;
          const newSubtotal = subtotal + item.price * item.quantity;

          return { 
            quantity: newQuantity,
            subtotal: newSubtotal
          }
        }, { quantity: 0, subtotal: 0 });

        const { subtotal, quantity } = results;
        const discount = subtotal * discountPercent();
        const total = subtotal - discount; 

        return { 
          quantity, 
          subtotal: subtotal.toFixed(2),
          discount: discount.toFixed(2),
          total: total.toFixed(2),
        }
      }),
    }
  }),
  withMethods((store) => ({
    updatePromoCode(promoCode: string): void {
      patchState(store, { promoCode })
    },
    buy(idx: number, product: Product, quantity: number): void {
      patchState(store, (state) => {
        const newCart = addCart(state, idx, product, quantity);

        return {
          cart: newCart,
        }
      })
    },
    update(id: number, quantity: number): void {  
      patchState(store, (state) => {
        const cart = updateCart(state, id, quantity);

        return { cart };
      });
    }
  }))
);
