import { Injectable } from '@angular/core';
import { categoryStore, updateCategories, updateCategoryProducts, updateProducts } from '../../category-products/stores/category.store';
import { injectStore } from '@tanstack/angular-store';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryProducts } from '../../categories/interfaces/category-products.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  categoryProducts = injectStore(categoryStore, (state) => state.categoryProducts);
  products = injectStore(categoryStore, (state) => state.products);

  updateCategoriesAndProducts(categories: string[], products: Product[]) {
    updateCategories(categories);
    updateProducts(products);
  }

  updateCategoryProducts(categoryProducts: CategoryProducts[]) {
    updateCategoryProducts(categoryProducts);
  }
}
