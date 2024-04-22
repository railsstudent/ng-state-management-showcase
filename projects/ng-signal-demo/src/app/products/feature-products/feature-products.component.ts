import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CategoryFacade } from '../../category-products/facades/category.facade';

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [ProductComponent],
  template: `
    @if (featuredProducts().length > 0) {
      <h2>Featured Products</h2>
      @if (featuredProducts(); as data) {
        <div class="featured">
          @for (product of data; track product.id) {
            <app-product [product]="product" class="item" />
          }
        </div>
      }
      <hr>
    }
  `,
  styles: `
    h2, hr {
      margin-bottom: 0.5rem;
    }

    div.featured {
      display: flex;
      flex-wrap: wrap;

      margin-bottom: 0.75rem;
    }

    div.featured > .item {
      flex-basis: 250px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProductsComponent {
  categoryFacade = inject(CategoryFacade);

  featuredProducts = this.categoryFacade.featuredProducts;
}