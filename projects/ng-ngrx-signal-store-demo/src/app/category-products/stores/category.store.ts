import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { CategoryStoreState } from '../states/category-store.state';

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
    updateCategoryStoreState(state: CategoryStoreState) {
      patchState(store, state);
    }
  }))
);
