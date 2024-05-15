import { Injectable } from '@angular/core';
import { injectStore } from '@tanstack/angular-store';
import { CategoryProducts } from '../../categories/interfaces/category-products.interface';
import { categoryStore, updateCategoryStoreState } from '../../category-products/stores/category.store';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryInit } from '../interfaces/category-init.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  categoryProducts = injectStore(categoryStore, (state) => state.categoryProducts);
  products = injectStore(categoryStore, (state) => state.products);
  featuredProducts = injectStore(categoryStore, (state) => state.featuredProducts);

  updateCategoryInfo({ categories, products, featuredProductIds }: CategoryInit) {

    const featuredProducts: Product[] = [];
    for (const id of featuredProductIds) {
      const p = products.find((p) => p.id === id);
      if (p) {
        featuredProducts.push(p);
      }
    }

    const categoryProducts = categories.reduce((acc, category) => {
      const matched = products.filter((p) => p.category === category);

      return acc.concat({
        category,
        products: matched,
      });
    }, [] as CategoryProducts[]);

    updateCategoryStoreState({
      categories,
      products,
      categoryProducts,
      featuredProducts,
    });
  }
}
