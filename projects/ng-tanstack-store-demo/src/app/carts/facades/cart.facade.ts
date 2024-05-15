import { Injectable } from "@angular/core";
import { injectStore } from "@tanstack/angular-store";
import { Product } from "../../products/interfaces/product.interface";
import { addCart, cartStore, updateCart } from "../stores/cart.store";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  cart = injectStore(cartStore, ({ cart }) => cart);

  discountPercent = injectStore(cartStore, ({ promoCode }) => {
    if (promoCode === 'DEVFESTHK2023') {
      return 0.1;
    } else if (promoCode === 'ANGULARNATION') {
      return 0.2;
    }

    return 0;
  });
  
  summary = injectStore(cartStore, (state) => {
    const results = state.cart.reduce(({ quantity, subtotal }, item) => ({
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
    };
  });
  promoCode = injectStore(cartStore, ({ promoCode }) => promoCode);

  updatePromoCode(promoCode: string) {
    cartStore.setState((state) => {
      return {
        ...state,
        promoCode,
      }
    });
  }

  addCart(idx: number, product: Product, quantity: number) {
    cartStore.setState((state) => {
      const cart = addCart(state, idx, product, quantity);    

      return {
        ...state,
        cart,
      }
    });
  }

  deleteCart(id: number) {
    cartStore.setState((state) => {
      const cart = updateCart(state, id, 0);

      return {
        ...state,
        cart,
      }
    });
  }

  updateCart(id: number, quantity: number) {
    cartStore.setState((state) => {
      const updatedCart = updateCart(state, id, quantity);

      return {
        ...state,
        cart: updatedCart,
      };
    });
  }
}
