import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';
import { CartFacade } from '../facades/cart.facade';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CartTotalComponent, FormsModule],
  template: `
    @if (cart().length > 0) {
      <div class="cart">
        <div class="row">
          <p style="width: 10%">Id</p>
          <p style="width: 20%">Title</p>
          <p style="width: 40%">Description</p>
          <p style="width: 10%">Price</p>
          <p style="width: 10%">Qty</p> 
          <p style="width: 10%">&nbsp;</p> 
        </div>

        @for (item of cart(); track item.id) {
          <app-cart-item [item]="item" [quantity]="item.quantity" />
        }
        <app-cart-total />
        <span>Promotion code: </span>
        <input [(ngModel)]="promoCode" />
        <button (click)="updatePromoCode(promoCode())">Apply</button>
      </div>
    } @else {
      <p>Your cart is empty, please buy something.</p>
    }
  `,
  styles: [`
    .row {
      display: flex;
    }

    .row > p {
      border: 1px solid black;
    }

    input {
      margin-right: 0.25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartFacade = inject(CartFacade);
  promoCode = signal(this.cartFacade.promoCode());
  cart = this.cartFacade.cart;

  updatePromoCode(code: string) {
    return this.cartFacade.updatePromoCode(code);
  }
}
