import { CartItem } from "../types/cart.type";

export interface CartStoreState {
  promoCode: string;
  discountPercent: number;
  cart: CartItem[],
}
