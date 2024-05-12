import { Injectable, signal } from '@angular/core';
import { rxState } from '@rx-angular/state';
import { CategoryStoreState } from '../states/category-store.state';

const initialState: CategoryStoreState = {
  categories: [],
  products: [],
  categoryProducts: [],
  featuredProducts: [],
}

@Injectable({
  providedIn: 'root'
})
export class CategoryStore {
  categoryProductInfo = signal<CategoryStoreState>({
    categories: [],
    products: [],
    categoryProducts: [],
    featuredProducts: [],
  });

  private state = rxState<CategoryStoreState>(({ set, connect }) => {
    // set initial statement
    set(initialState);
    connect(this.categoryProductInfo);
  });

  signal: typeof this.state.signal = this.state.signal.bind(this.state);
}
