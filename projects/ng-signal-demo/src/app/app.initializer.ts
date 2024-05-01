import { HttpClient } from "@angular/common/http";
import { DestroyRef } from "@angular/core";
import { CategoryFacade } from "./category-products/facades/category.facade";
import { ProductService } from "./products/services/product.service";
import { catchError, combineLatestWith, EMPTY, retry, tap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

export function loadCategoryProducts(httpClient: HttpClient, destroyRef$: DestroyRef, facade: CategoryFacade, productService: ProductService) {
  const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';

  return () => {
    const categories$ = httpClient.get<string[]>(CATEGORIES_URL);
    categories$.pipe(
      retry(3),
      combineLatestWith(
        productService.products$,
        productService.featuredProductIds$
      ),
      tap(([categories, products, featuredProductIds]) => facade.updateCategoryInfo({
        categories,
        products,
        featuredProductIds
      })
      ),
      takeUntilDestroyed(destroyRef$),
      catchError((e) => {
        facade.updateCategoryInfo({
          categories: [],
          products: [],
          featuredProductIds: []
        });
        console.error(e);
        return EMPTY;
      })
    ).subscribe();
  };
}
