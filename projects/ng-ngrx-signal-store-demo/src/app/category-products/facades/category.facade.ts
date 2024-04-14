import { Injectable, inject } from "@angular/core";
import { CategoryStore } from "../stores/category.store";
import { Product } from "../../products/interfaces/product.interface";
import { CategoryProducts } from "../../categories/interfaces/category-products.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  store = inject(CategoryStore);

  categoryProducts = this.store.categoryProducts;  
  products = this.store.products;
  
  updateCategoriesAndProducts(categories: string[], products: Product[]) {
    this.store.updateCategories(categories);
    this.store.updateProducts(products);
  }

  updateCategoryProducts(categoryProducts: CategoryProducts[]) {
    this.store.updateCategoryProducts(categoryProducts);
  }
}
