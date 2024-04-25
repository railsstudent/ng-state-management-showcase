import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductComponent } from '../../products/product/product.component';
import { CategoryFacade } from '../../category-products/facades/category.facade';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, TitleCasePipe],
  template: `
    <h2>Catalogue</h2>
    <div>
      @if (categoryProducts(); as data) {
        @for (catProducts of data; track catProducts.category) {
          <h3>{{ catProducts.category | titlecase }}</h3>
          <div class="products">
          @for (product of catProducts.products; track product.id) {
            <app-product [product]="product" />
          }
          </div>
        }
      }
    </div>
  `,
  styles: [`
    div.products {
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
    }

    app-product {
      flex-basis: 250px;
      height: 300px;
      margin-bottom: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  categoryFacade = inject(CategoryFacade);
  categoryProducts = this.categoryFacade.categoryProducts;
}
