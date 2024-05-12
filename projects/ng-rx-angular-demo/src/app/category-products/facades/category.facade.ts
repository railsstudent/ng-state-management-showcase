import { Injectable, inject } from "@angular/core";
import { CategoryProducts } from "../../categories/interfaces/category-products.interface";
import { Product } from "../../products/interfaces/product.interface";
import { CategoryInit } from "../interfaces/category-init.interface";
import { CategoryStore } from "../stores/category.store";

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  store = inject(CategoryStore);

  categoryProducts = this.store.signal('categoryProducts');  
  products = this.store.signal('products');
  featuredProducts = this.store.signal('featuredProducts');

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

    this.store.categoryProductInfo.set({
      categories,
      products,
      categoryProducts,
      featuredProducts,
    });
  }
}
