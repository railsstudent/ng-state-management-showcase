import { HttpClient, provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER, DestroyRef } from "@angular/core";
import { provideRouter, TitleStrategy, withComponentInputBinding } from "@angular/router";
import { loadCategoryProducts } from './app.initializer';
import { routes } from "./app.routes";
import { CategoryFacade } from "./category-products/facades/category.facade";
import { ProductService } from "./products/services/product.service";
import { ShopPageTitleStrategy } from "./shop-page-title.strategy";

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
