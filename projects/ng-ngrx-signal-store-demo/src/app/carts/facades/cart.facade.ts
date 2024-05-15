import { Injectable, inject } from "@angular/core";
import { Product } from "../../products/interfaces/product.interface";
import { CartStore } from "../stores/cart.store";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  private store = inject(CartStore);

  cart = this.store.cart;
  discountPercent = this.store.discountPercent;
  summary = this.store.summary;
  promoCode = this.store.promoCode;

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
