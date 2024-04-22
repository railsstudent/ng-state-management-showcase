import { CartItem } from "../types/cart-item.type";

export interface CartStoreState {
  promoCode: string;
  cart: CartItem[],
}
