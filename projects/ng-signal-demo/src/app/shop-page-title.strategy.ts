import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { ProductService } from './products/services/product.service';

@Injectable()
export class ShopPageTitleStrategy extends TitleStrategy {
  title = inject(Title);
  productService = inject(ProductService);
  
  updateTitle(snapshot: RouterStateSnapshot): void {
    const customTitle = this.buildTitle(snapshot) || '';
    const productId = snapshot.root.firstChild?.params['id'] || '';
    if (productId) {
      const productQuery = this.productService.getProduct(productId);
      productQuery.then((data) => {
        const productTitle = data?.title || '';
        this.title.setTitle(`Product - ${productTitle}`);
      })
    } else {
      this.title.setTitle(customTitle);
    }
  }

}
