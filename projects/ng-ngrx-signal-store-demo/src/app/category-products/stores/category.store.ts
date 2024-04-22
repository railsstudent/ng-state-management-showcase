import { CategoryProducts } from '../../categories/interfaces/category-products.interface';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryStoreState } from '../states/category-store.state';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const intialState: CategoryStoreState = {
  categories: [],
  products: [],
  categoryProducts: [],
  featuredProducts: [],
}

export const CategoryStore = signalStore(
  { providedIn: 'root' },
  withState(intialState),
  withMethods((store) => ({
    updateCategories(categories: string[]) {
      patchState(store, { categories });
    },
    updateProducts(products: Product[]) {
      patchState(store, { products });
    },
    updateCategoryProducts(categoryProducts: CategoryProducts[]) {
      patchState(store, { categoryProducts })
    },
    updateFeaturedProducts(featuredProducts: Product[]) {
      patchState(store, { featuredProducts });
    },
  }))
);
