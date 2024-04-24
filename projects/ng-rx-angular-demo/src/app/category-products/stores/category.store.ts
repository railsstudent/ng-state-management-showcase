import { Injectable } from '@angular/core';
import { CategoryProducts } from '../../categories/interfaces/category-products.interface';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryStoreState } from '../states/category-store.state';
import { rxState } from '@rx-angular/state';

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
  private state = rxState<CategoryStoreState>(({ set }) => {
    // set initial statement
    set(initialState);
  });

  signal: typeof this.state.signal = this.state.signal.bind(this.state);

  set: typeof this.state.set = this.state.set.bind(this.state);

  updateCategories(categories: string[]) {
    this.state.set({ categories });
  }

  updateProducts(products: Product[]) {
    this.state.set({ products });
  }

  updateCategoryProducts(categoryProducts: CategoryProducts[]) {
    this.state.set({ categoryProducts });
  }

  updateFeaturedProducts(featuredProducts: Product[]) {
    this.state.set({ featuredProducts });
  }
}
