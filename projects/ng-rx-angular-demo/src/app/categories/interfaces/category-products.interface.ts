import { Product } from '../../products/interfaces/product.interface';

export interface CategoryProducts { 
  category: string; 
  products: Product[]; 
}
