import { Store } from '@tanstack/store';
import { CartStoreState } from '../states/cart-store.state';

export const cartStore = new Store<CartStoreState>({
  promoCode: '',
  discountPercent: 0,
  cart: [],
});

