import { Injectable, Signal, inject } from "@angular/core";
import { Product } from "../../products/interfaces/product.interface";
import { CartStore } from "../stores/cart.store";
import { CartItem } from "../types/cart-item.type";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  cartStore = inject(CartStore);

  get cart(): Signal<CartItem[]> {
    return this.cartStore.signal('cart');
  }

  get discountPercent(): Signal<number> {
    return this.cartStore.discountPercent;
  }

  get summary() {
    return this.cartStore.summary;
  }

  get promoCode() {
    return this.cartStore.signal('promoCode');
  }

  updatePromoCode(promoCode: string) {
    this.cartStore.set({ promoCode });
  }

  addCart(idx: number, product: Product, quantity: number) {
    this.cartStore.order({
      action: 'buy',
      idx,
      product,
      quantity,
    })
  }

  deleteCart(id: number) {
    this.cartStore.order({ action: 'remove', id });
  }

  updateCart(id: number, quantity: number) {
    this.cartStore.order({ action: 'update', id, quantity });
  }
}
