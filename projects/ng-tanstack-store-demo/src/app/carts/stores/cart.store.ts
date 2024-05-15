import { Store } from '@tanstack/store';
import { CartStoreState } from '../states/cart-store.state';
import { Product } from '../../products/interfaces/product.interface';

export const cartStore = new Store<CartStoreState>({
  promoCode: '',
  cart: [],
});

export function addCart({ cart }: CartStoreState, idx: number, product: Product, quantity: number) {
  if (idx >= 0) {
    return cart.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          quantity: item.quantity + quantity,
        }
      }
      return item
    });

  }
  
  return [...cart, { ...product, quantity } ];
}

export function updateCart({cart}: CartStoreState, productId: number, quantity: number) {

  if (quantity <= 0) {
    return cart.filter((item) => item.id !== productId);
  }

  return cart.map((item) => 
    item.id === productId ? { ...item, quantity} : item 
  );
}
