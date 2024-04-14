import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { CartStoreState } from '../states/cart-store.state';
import { computed } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';
import { CartItem } from '../types/cart.type';

const initialState: CartStoreState = {
  promoCode: '',
  cart: [],
}

function deleteFromCart(state: CartStoreState, id: number): CartItem[] {
  const updatedCart = state.cart.filter((item) => item.id !== id);

  return updatedCart;
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
      patchState(store, (state) => ({ promoCode }))
    },
    buy(idx: number, product: Product, quantity: number): void {
      patchState(store, (state) => {
        let newCart: CartItem[] = [];
        if (idx >= 0) {
          newCart = state.cart.map((item, i) => {
            if (i === idx) {
              return {
                ...item,
                quantity: item.quantity + quantity,
              }
            }
            return item;``
          });
        } else {
          newCart = [...state.cart, { ...product, quantity } ];
        }

        return {
          cart: newCart,
        }
      })
    },
    remove(id: number): void {
      patchState(store, (state) => {
        const cart = deleteFromCart(state, id);
        return { cart };
      });
    },
    update(id: number, quantity: number): void {  
      patchState(store, (state) => {
        if (quantity <= 0) {
          const cart = deleteFromCart(state, id);
          return { cart };
        } else {
          const cart = state.cart.map((item) => 
            item.id === id ? { ...item, quantity} : item 
          );

          return { cart };
        }
      });
    }
  }))
);
