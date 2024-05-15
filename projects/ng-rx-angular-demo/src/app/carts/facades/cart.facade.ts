import { Injectable, Signal, inject } from "@angular/core";
import { Product } from "../../products/interfaces/product.interface";
import { CartStore } from "../stores/cart.store";
import { CartItem } from "../types/cart-item.type";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  cartStore = inject(CartStore);

  cart = this.cartStore.cart;
  discountPercent = this.cartStore.discountPercent;
  summary = this.cartStore.summary;
  promoCode = this.cartStore.promoCode;

  updatePromoCode(promoCode: string) {
    this.cartStore.promoCode.set(promoCode);
  }

  addCart(idx: number, product: Product, quantity: number) {
    this.cartStore.orderCartItem.set({
      action: 'buy',
      idx,
      product,
      quantity,
    });
  }

  deleteCart(id: number) {
    this.cartStore.orderCartItem.set({ action: 'remove', id });
  }

  updateCart(id: number, quantity: number) {
    this.cartStore.orderCartItem.set({ action: 'update', id, quantity });
  }
}
