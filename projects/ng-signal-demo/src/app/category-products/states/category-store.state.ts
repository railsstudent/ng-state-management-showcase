import { CategoryProducts } from "../../categories/interfaces/category-products.interface";
import { Product } from "../../products/interfaces/product.interface";

export interface CategoryStoreState {
  categories: string[],
  products: Product[],
  categoryProducts: CategoryProducts[],
  featuredProducts: Product[],
}
