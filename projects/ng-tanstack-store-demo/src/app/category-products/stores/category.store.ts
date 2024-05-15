import { Store } from '@tanstack/store';
import { CategoryStoreState } from '../states/category-store.state';

export const categoryStore = new Store<CategoryStoreState>({
  categories: [],
  products: [],
  categoryProducts: [],
  featuredProducts: [],
});

export function updateCategoryStoreState(newState: CategoryStoreState) {
  categoryStore.setState((state) => ({
    ...state,
    ...newState
  }))
}
