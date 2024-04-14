import { CategoryProducts } from '../../categories/interfaces/category-products.interface';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryStoreState } from '../states/category-store.state';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const intialState: CategoryStoreState = {
  categories: [],
  products: [],
  categoryProducts: [],
}

export const CategoryStore = signalStore(
  { providedIn: 'root' },
  withState(intialState),
  withMethods((store) => ({
    updateCategories(categories: string[]) {
      patchState(store, (state) => ({
        ...state,
        categories,
      }));
    },
    updateProducts(products: Product[]) {
      patchState(store, (state) => ({
        ...state,
        products,
      }));
    },
    updateCategoryProducts(categoryProducts: CategoryProducts[]) {
      patchState(store, (state) => ({
        ...state,
        categoryProducts,
      }));
    },
  }))
);
