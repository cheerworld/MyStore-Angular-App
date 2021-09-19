import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private jsonPath = 'assets/data.json';

  //public products: Product[] = [];

  //public product: Product[] = [];
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonPath);
  }
  /*
  public getProduct(name: string) {
    this.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);

      this.product = this.products.filter((item) => {
        return item.name === name;
      });
      console.log(this.product);
    });
  }
  */
}
