import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, effect, signal } from '@angular/core';
import { ProductComponent } from '../../products/product/product.component';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryFacade } from '../../category-products/facades/category.facade';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [ProductComponent, TitleCasePipe],
  template: `
    <h2>{{ category() | titlecase }}</h2>
    @if (products().length > 0) {
      <div class="products">
        @for(product of products(); track product.id) {
          <app-product [product]="product" />
        }
      </div>
    } @else {
      <p>Category does not have products</p>
    }
  `,
  styles: `
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductsComponent {
  category = input('');

  private readonly categoryFacade = inject(CategoryFacade);
  products = signal<Product[]>([]);

  constructor() {
    effect(async () => {
      try {
        const allCatProducts = this.categoryFacade.categoryProducts();
        const catProducts = allCatProducts.find(({ category }) => category === this.category());

        if (catProducts) {
          this.products.set(catProducts.products);
        }
      } catch (e) {
        console.error(e);
        this.products.set([]);
      }
    }, { allowSignalWrites : true });
  } 
}
