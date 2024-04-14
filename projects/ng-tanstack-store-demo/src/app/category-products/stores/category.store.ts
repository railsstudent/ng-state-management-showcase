import { Store } from '@tanstack/store';
import { CategoryProducts } from '../../categories/interfaces/category-products.interface';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryStoreState } from '../states/category-store.state';

export const categoryStore = new Store<CategoryStoreState>({
  categories: [],
  products: [],
  categoryProducts: [],
});

export function updateCategories(categories: string[]) {
  categoryStore.setState((state) => 
    ({
      ...state,
      categories,
    }));
}

export function updateProducts(products: Product[]) {
  categoryStore.setState((state) => ({
    ...state,
    products,
  }));
}

export function updateCategoryProducts(categoryProducts: CategoryProducts[]) {
  categoryStore.setState((state) => ({
    ...state,
    categoryProducts,
  }));
}
