import { HttpClient, provideHttpClient } from "@angular/common/http";
import { provideRouter, TitleStrategy, withComponentInputBinding } from "@angular/router";
import { routes } from "./app.routes";
import { ShopPageTitleStrategy } from "./shop-page-title.strategy";
import { APP_INITIALIZER, DestroyRef } from "@angular/core";
import { EMPTY, catchError, combineLatestWith, retry, tap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ProductService } from "./products/services/product.service";
import { CategoryFacade } from "./category-products/facades/category.facade";

function loadCategoryProducts(httpClient: HttpClient, destroyRef$: DestroyRef, facade: CategoryFacade, productService: ProductService) {
  const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';

  return () => {
    const categories$ = httpClient.get<string[]>(CATEGORIES_URL);
    categories$.pipe(
      retry(3),
      combineLatestWith(
        productService.products$,
        productService.featuredProductIds$,
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
        })
        console.error(e);
        return EMPTY;
      })
    ).subscribe();
  }
}

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: TitleStrategy,
      useClass: ShopPageTitleStrategy,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [HttpClient, DestroyRef, CategoryFacade, ProductService],
      useFactory: (httpClient: HttpClient, destroyRef: DestroyRef, facade: CategoryFacade, productService: ProductService) => 
        loadCategoryProducts(httpClient, destroyRef, facade, productService) 
    }
  ]
}
