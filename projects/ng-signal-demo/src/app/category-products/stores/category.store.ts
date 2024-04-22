import { Injectable, computed, signal } from '@angular/core';
import { CategoryProducts } from '../../categories/interfaces/category-products.interface';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryStoreState } from '../states/category-store.state';

const initialState: CategoryStoreState = {
  categories: [],
  products: [],
  categoryProducts: [],
  featuredProducts: []
}

@Injectable({
  providedIn: 'root'
})
export class CategoryStore {
  state = signal(initialState);

  categories = computed(() => this.state().categories);
  products = computed(() => this.state().products);
  categoryProducts = computed(() => this.state().categoryProducts);
  featuredProducts = computed(() => this.state().featuredProducts);
  
  updateCategories(categories: string[]) {
    this.state.update((oldState) => ({
        ...oldState,
        categories,
      })
    );
  }

  updateProducts(products: Product[]) {
    this.state.update((oldState) => ({
        ...oldState,
        products,
      })
    );
  }

  updateCategoryProducts(categoryProducts: CategoryProducts[]) {
    this.state.update((oldState) => ({
        ...oldState,
        categoryProducts,
      })
    );
  }

  updateFeaturedProducts(featuredProducts: Product[]) {
    this.state.update((oldState) => ({
        ...oldState,
        featuredProducts,
      })
    );
  }
}
