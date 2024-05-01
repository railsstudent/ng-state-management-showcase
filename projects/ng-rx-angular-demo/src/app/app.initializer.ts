import { HttpClient } from "@angular/common/http";
import { DestroyRef } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { EMPTY, catchError, combineLatestWith, retry, tap } from "rxjs";
import { CategoryFacade } from "./category-products/facades/category.facade";
import { ProductService } from "./products/services/product.service";

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
      tap(([categories, products, featuredProductIds]) => {
        facade.updateCategoryInfo({
          products,
          featuredProductIds,
          categories
        });
      }),
      takeUntilDestroyed(destroyRef$),
      catchError((e) => {
        facade.updateCategoryInfo({
          products: [],
          featuredProductIds: [],
          categories: [],
        });
        console.error(e);
        return EMPTY;
      })
    ).subscribe();
  };
}
