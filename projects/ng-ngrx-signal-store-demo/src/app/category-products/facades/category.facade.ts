import { Injectable, inject } from "@angular/core";
import { CategoryStore } from "../stores/category.store";
import { Product } from "../../products/interfaces/product.interface";
import { CategoryProducts } from "../../categories/interfaces/category-products.interface";
import { CategoryInit } from '../interfaces/category-init.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  store = inject(CategoryStore);

  categoryProducts = this.store.categoryProducts;  
  products = this.store.products;
  featuredProducts = this.store.featuredProducts;
  
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

    this.store.updateCategories(categories);
    this.store.updateProducts(products);
    this.store.updateCategoryProducts(categoryProducts);
    this.store.updateFeaturedProducts(featuredProducts);
  }
}
