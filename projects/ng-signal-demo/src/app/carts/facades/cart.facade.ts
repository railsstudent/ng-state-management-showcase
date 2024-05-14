import { Injectable, Signal, inject } from "@angular/core";
import { CartStore } from "../stores/cart.store";
import { Product } from "../../products/interfaces/product.interface";
import { CartItem } from "../types/cart-item.type";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  private store = inject(CartStore);

  get cart(): Signal<CartItem[]> {
    return this.store.cart;
  }

  get discountPercent(): Signal<number> {
    return this.store.discountPercent;
  }

  get summary() {
    return this.store.summary;
  }

  get promoCode() {
    return this.store.promoCode;
  }

  updatePromoCode(promoCode: string) {
    this.store.updatePromoCode(promoCode);
  }

  addCart(idx: number, product: Product, quantity: number) {
    this.store.buy(idx, product, quantity);
  }

  deleteCart(id: number) {
    this.store.update(id, 0);
  }

  updateCart(id: number, quantity: number) {
    this.store.update(id, quantity);
  }
}
