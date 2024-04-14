import { Injectable } from "@angular/core";
import { injectStore } from "@tanstack/angular-store";
import { cartStore } from "../stores/cart.store";
import { Product } from "../../products/interfaces/product.interface";
import { CartItem } from "../types/cart.type";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  private _cart = injectStore(cartStore, (state) => state.cart);
  private _discountPercent = injectStore(cartStore, (state) => state.discountPercent);
  private _summary = injectStore(cartStore, (state) => {
    const results = state.cart.reduce(({ quantity, subtotal }, item) => {
      const newQuantity = quantity + item.quantity;
      const newSubtotal = subtotal + item.price * item.quantity;

      return { 
        quantity: newQuantity,
        subtotal: newSubtotal
      }
    }, { quantity: 0, subtotal: 0 });

    const { subtotal, quantity } = results;
    const discount = subtotal * state.discountPercent;
    const total = subtotal - discount; 

    return { 
      quantity, 
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      total: total.toFixed(2),
    };
  });
  private _promoCode = injectStore(cartStore, (state) => state.promoCode);

  get cart() {
    return this._cart;
  }

  get discountPercent() {
    return this._discountPercent;
  }

  get summary() {
    return this._summary;
  }

  get promoCode() {
    return this._promoCode;
  }

  private getDiscount(code: string) {
    if (code === 'DEVFESTHK2023') {
      return 0.1;
    } else if (code === 'ANGULARNATION') {
      return 0.2;
    }

    return 0;
  } 

  updatePromoCode(promoCode: string) {
    const discountPercent = this.getDiscount(promoCode);

    cartStore.setState((state) => {
      return {
        ...state,
        promoCode,
        discountPercent,
      }
    });
  }

  addCart(idx: number, product: Product, quantity: number) {
    cartStore.setState((state) => {
      let newCart: CartItem[] = [];
      if (idx >= 0) {
        newCart = state.cart.map((item, i) => {
          if (i === idx) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            }
          }
          return item
        });

      } else {
        newCart = [...state.cart, { ...product, quantity } ];
      }

      return {
        ...state,
        cart: newCart,
      }
    });
  }

  deleteCart(id: number) {
    cartStore.setState((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);

      return {
        ...state,
        cart: updatedCart,
      }
    });
  }

  updateCart(id: number, quantity: number) {
    if (quantity <= 0) {
      this.deleteCart(id);
    } else {
      cartStore.setState((state) => {
        const updatedCart = state.cart.map((item) => 
          item.id === id ? { ...item, quantity} : item 
        );

        return {
          ...state,
          cart: updatedCart,
        };
      });
    }
  }
}
