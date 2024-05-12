import { Product } from "../../products/interfaces/product.interface";

export type BuyCartItem = {
  idx: number;
  product: Product;
  quantity: number;
};

export type OrderCartItem = BuyCartItem & {
  action: 'buy';
} | {
  action: 'remove';
  id: number;
} | {
  action: 'update'
  id: number;
  quantity: number;
}
