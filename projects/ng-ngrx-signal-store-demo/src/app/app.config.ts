import { HttpClient, provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER, DestroyRef, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { provideRouter, TitleStrategy, withComponentInputBinding } from "@angular/router";
import { catchError, combineLatestWith, EMPTY, of, retry, tap } from "rxjs";
import { routes } from "./app.routes";
import { CategoryProducts } from "./categories/interfaces/category-products.interface";
import { CategoryStore } from "./category-products/stores/category.store";
import { Product } from "./products/interfaces/product.interface";
import { ShopPageTitleStrategy } from "./shop-page-title.strategy";

function loadCategoryProducts(httpClient: HttpClient, destroyRef$: DestroyRef) {
  const PRODUCTS_URL = 'https://fakestoreapi.com/products';
  const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories';
  const store = inject(CategoryStore);

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
        store.updateCategories(categories);
        store.updateProducts(products);

        const categoryResults = categories.reduce((acc, category) => {
          const matched = products.filter((p) => p.category === category);

          return acc.concat({
            category,
            products: matched,
          });
        }, [] as CategoryProducts[]);
        
        store.updateCategoryProducts(categoryResults);
      }),
      takeUntilDestroyed(destroyRef$),
      catchError((e) => {
        console.error(e);
        store.updateCategories([]);
        store.updateProducts([]);
        store.updateCategoryProducts([]);
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
      deps: [HttpClient, DestroyRef],
      useFactory: (httpClient: HttpClient, destroyRef: DestroyRef) => 
        loadCategoryProducts(httpClient, destroyRef) 
    }
  ]
}
