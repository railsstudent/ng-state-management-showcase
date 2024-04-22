import { HttpClient, provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, DestroyRef } from '@angular/core';
import { provideRouter, TitleStrategy, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { CategoryFacade } from './category-products/facades/category.facade';
import { ProductService } from './products/services/product.service';
import { ShopPageTitleStrategy } from './shop-page-title.strategy';
import { catchError, combineLatestWith, EMPTY, retry, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
          categories,
          products,
          featuredProductIds
        });
      }),
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
  }
}

export const appConfig: ApplicationConfig = {
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
};