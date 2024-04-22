import { Product } from "../../products/interfaces/product.interface";

export interface CategoryInit {
  categories: string[],
  products: Product[],
  featuredProductIds: number[],
}
