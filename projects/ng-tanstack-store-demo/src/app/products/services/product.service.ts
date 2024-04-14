import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, lastValueFrom, map, of, retry } from 'rxjs';
import { Product } from '../interfaces/product.interface';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';
const FEATURED_PRODUCTS_URL = 'https://gist.githubusercontent.com/railsstudent/ae150ae2b14abb207f131596e8b283c3/raw/131a6b3a51dfb4d848b75980bfe3443b1665704b/featured-products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);

  featuredProductIds$ = this.httpClient.get<{ ids: number[] }>(FEATURED_PRODUCTS_URL)
    .pipe(
      retry(3),
      map(({ ids }) => ids),
      catchError((e) => {
        console.error(e);
        return of([]);
      })
    );
  
  getProduct(id: number | undefined): Promise<Product | null> {
    if (!id) {
      return Promise.resolve(null);
    }

    const product$ = this.httpClient.get<Product>(`${PRODUCTS_URL}/${id}`).pipe(
      retry(3),
      catchError((err) => {
        console.error(err);
        return of(null)
      })
    );
    return lastValueFrom(product$);
  }
}
