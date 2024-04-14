import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { CartFacade } from '../../carts/facades/cart.facade';
import { CategoryFacade } from '../../category-products/facades/category.facade';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [TitleCasePipe, FormsModule, RouterLink],
  template: `
    <div>
      @if (product(); as data) {
        @if (data) {
          <div class="product">
            <div class="row">
              <img [src]="data.image" [attr.alt]="data.title || 'product image'" width="200" height="200" />
            </div>
            <div class="row">
              <span>Id:</span>
              <span>{{ data.id }}</span>
            </div>
            <div class="row">
              <span>Category: </span>
              <a [routerLink]="['/categories', data.category]">{{ data.category | titlecase }}</a>
            </div>
            <div class="row">
              <span>Description: </span>
              <span>{{ data.description }}</span>
            </div>
            <div class="row">
              <span>Price: </span>
              <span>{{ data.price }}</span>
            </div> 
          </div>
          <div class="buttons">
            <input type="number" class="order" min="1" [(ngModel)]="quantity" />
            <button (click)="addItem(data)">Add</button>
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .product, .buttons {
      margin-bottom: 1rem;
    }

    .row > span {
      display: inline-block;
      margin-bottom: 0.25rem;
    }

    .row > span:first-of-type {
      color: #aaa;
      width: 20%;
    }

    .row > span:nth-of-type(2) {
      width: 80%;
    }

    input.order {
      width: 100px;
      height: 30px;
      margin-right: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  id = input<number | undefined, string | undefined>(undefined, {
    transform: (data) => {
      return typeof data !== 'undefined' ? +data : undefined;
    }
  });

  cartFacade = inject(CartFacade);
  categoryFacade = inject(CategoryFacade);
  quantity = signal(1);

  cart = this.cartFacade.cart;

  product = toSignal(toObservable(this.id)
    .pipe(switchMap((id) => this.getProduct(id))), {
    initialValue: undefined
  });

  async getProduct(id: number | undefined) {
    try {
      if (!id) {
        return undefined;
      }
      
      return this.categoryFacade.products().find((p) => p.id === id);
    } catch {
      return undefined;
    }
  }

  addItem(product: Product) {
    const idx = this.cart().findIndex((item) => item.id === product.id);
    console.log('addItem', idx);
    this.cartFacade.addCart(idx, product, this.quantity());
  }
}
