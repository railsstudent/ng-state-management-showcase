import { HttpClient, provideHttpClient } from "@angular/common/http";
import { provideRouter, TitleStrategy, withComponentInputBinding } from "@angular/router";
import { routes } from "./app.routes";
import { ShopPageTitleStrategy } from "./shop-page-title.strategy";
import { APP_INITIALIZER, DestroyRef } from "@angular/core";
import { ProductService } from "./products/services/product.service";
import { CategoryFacade } from "./category-products/facades/category.facade";
import { loadCategoryProducts } from './app.initializer';

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
