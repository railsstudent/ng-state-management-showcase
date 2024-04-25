import { HttpClient, provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER, DestroyRef } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { provideRouter, TitleStrategy, withComponentInputBinding } from "@angular/router";
import { catchError, combineLatestWith, EMPTY, retry, tap } from "rxjs";
import { routes } from "./app.routes";
import { CategoryFacade } from "./category-products/facades/category.facade";
import { ProductService } from './products/services/product.service';
import { ShopPageTitleStrategy } from "./shop-page-title.strategy";

function loadCategoryProducts(httpClient: HttpClient, destroyRef$: DestroyRef, 
catFacade: CategoryFacade, productService: ProductService) {
  const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';

  return () => {
    const categories$ = httpClient.get<string[]>(CATEGORIES_URL);
    categories$.pipe(
      retry(3),
      combineLatestWith(
        productService.products$,
        productService.featuredProductIds$,
      ),
      tap(([categories, products, featuredProductIds]) => 
        catFacade.updateCategoryInfo({
          categories,
          products,
          featuredProductIds
        })
      ),
      takeUntilDestroyed(destroyRef$),
      catchError((e) => {
        catFacade.updateCategoryInfo({
          categories: [],
          products: [],
          featuredProductIds: [],
        });

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
      useFactory: (httpClient: HttpClient, destroyRef: DestroyRef, catFarcade: CategoryFacade, productService: ProductService) => 
        loadCategoryProducts(httpClient, destroyRef, catFarcade, productService),
    }
  ]
}
