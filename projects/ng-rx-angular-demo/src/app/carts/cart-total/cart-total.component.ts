import { PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartFacade } from '../facades/cart.facade';

@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [PercentPipe],
  template: `
    <div class="summary">
      <div class="row">
        <div class="col">Qty: {{ summary().quantity }}</div>
        <div class="col">Subtotal: {{ summary().subtotal }}</div>
      </div>
      @if (discountPercent() > 0) {
        <div class="row">
          <div class="col">Minus {{ discountPercent() | percent:'2.2-2' }}</div> 
          <div class="col">Discount: {{ summary().discount }}</div>
        </div>
      }
      <div class="row">
        <div class="col">&nbsp;</div> 
        <div class="col">Total: {{ summary().total }}</div>
      </div>
    </div>
  `,
  styles: [`
    .summary {
      border: 1px solid black;
      margin-bottom: 1rem;
    }

    .row {
      display: flex;
      justify-content: flex-end;
    }

    .col {
      width: 20%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartTotalComponent {
  cartFacade = inject(CartFacade);

  discountPercent = this.cartFacade.discountPercent;
  cart = this.cartFacade.cart;
  summary = this.cartFacade.summary;
}
