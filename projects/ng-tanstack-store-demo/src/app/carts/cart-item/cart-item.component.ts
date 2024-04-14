import { ChangeDetectionStrategy, Component,inject,input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../types/cart.type';
import { CartFacade } from '../facades/cart.facade';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="row">
      <p style="width: 10%">{{ item().id }}</p>
      <p style="width: 20%">{{ item().title }}</p>
      <p style="width: 40%">{{ item().description }}</p>
      <p style="width: 10%">{{ item().price }}</p>
      <p style="width: 10%">
        <input style="width: 50px;" type="number" min="1" [(ngModel)]="quantity" />
      </p>
      <p style="width: 10%">
        <button class="btnUpdate" (click)="update(item().id, quantity())">Update</button>
        <button (click)="delete(item().id)">X</button>
      </p>
    </div>
  `,
  styles: [`
    .row {
      display: flex;
    }

    .row > p {
      border: 1px solid black;
    }

    .btnUpdate {
      margin-right: 0.25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  cartFacade = inject(CartFacade);

  item = input.required<CartItem>();
  quantity = model(0);

  delete(id: number) {
    return this.cartFacade.deleteCart(id);
  }

  update(id: number, quantity: number) {
    return this.cartFacade.updateCart(id, quantity);
  }
}
