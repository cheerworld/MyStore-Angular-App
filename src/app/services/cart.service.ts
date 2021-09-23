import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productListInCart: Product[] = [];

  constructor() {}

  getProductsInCart() {
    return this.productListInCart;
  }

  addToCart(product: Product) {
    this.productListInCart.push(product);
    console.log('productListInCart:', this.productListInCart);
    return this.productListInCart;
  }

  deleteProduct(name: string) {
    this.productListInCart = this.productListInCart.filter(
      (item) => item.name !== name
    );
    return this.productListInCart;
  }
}
