import { Injectable, Signal, inject } from "@angular/core";
import { CartStore } from "../stores/cart.store";
import { Product } from "../../products/interfaces/product.interface";
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
    this.cartStore.buy(idx, product, quantity);
  }

  deleteCart(id: number) {
    this.cartStore.remove(id);
  }

  updateCart(id: number, quantity: number) {
    this.cartStore.update(id, quantity);
  }
}
