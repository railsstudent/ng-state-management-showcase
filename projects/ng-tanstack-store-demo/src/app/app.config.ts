import { HttpClient, provideHttpClient } from "@angular/common/http";
import { provideRouter, TitleStrategy, withComponentInputBinding } from "@angular/router";
import { routes } from "./app.routes";
import { ShopPageTitleStrategy } from "./shop-page-title.strategy";
import { catchError, combineLatestWith, EMPTY, of, retry, tap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CategoryProducts } from "./categories/interfaces/category-products.interface";
import { Product } from "./products/interfaces/product.interface";
import { APP_INITIALIZER, DestroyRef } from "@angular/core";
import { CategoryFacade } from "./category-products/facades/category.facade";

function loadCategoryProducts(httpClient: HttpClient, destroyRef$: DestroyRef, 
catFacade: CategoryFacade) {
  const PRODUCTS_URL = 'https://fakestoreapi.com/products';
  const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';

  return () => {
    const categories$ = httpClient.get<string[]>(CATEGORIES_URL);
    categories$.pipe(
      retry(3),
      combineLatestWith(
        httpClient.get<Product[]>(PRODUCTS_URL)
          .pipe(
            retry(3),
            catchError((e) => {
              console.error(e);
              return of([]);
            })
          )
      ),
      tap(([categories, products]) => {
        catFacade.updateCategoriesAndProducts(categories, products);

        const categoryResults = categories.reduce((acc, category) => {
          const matched = products.filter((p) => p.category === category);

          return acc.concat({
            category,
            products: matched,
          });
        }, [] as CategoryProducts[]);
        
        catFacade.updateCategoryProducts(categoryResults);
      }),
      takeUntilDestroyed(destroyRef$),
      catchError((e) => {
        catFacade.updateCategoriesAndProducts([], []);
        catFacade.updateCategoryProducts([]);

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
      deps: [HttpClient, DestroyRef, CategoryFacade],
      useFactory: (httpClient: HttpClient, destroyRef: DestroyRef, catFarcade: CategoryFacade) => 
        loadCategoryProducts(httpClient, destroyRef, catFarcade),

    }
  ]
}
