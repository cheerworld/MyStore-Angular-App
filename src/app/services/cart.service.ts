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

  addToCart(quantity: number, product: Product) {
    const checkProductExist = this.productListInCart.filter(
      (p) => p.id === product.id
    );
    if (checkProductExist.length !== 0) {
      const priorQuantity = parseInt(
        checkProductExist[0]['quantity'] as unknown as string
      );
      const addQuantity =
        priorQuantity + parseInt(quantity as unknown as string);
      checkProductExist[0]['quantity'] = addQuantity;
      this.productListInCart = this.productListInCart
        .filter((p) => p.id !== product.id)
        .concat(checkProductExist);
      console.log(checkProductExist);
      console.log(this.productListInCart);
      return this.productListInCart;
    } else {
      const quantityToInt = parseInt(quantity as unknown as string);
      product['quantity'] = quantityToInt;
      this.productListInCart.push(product);
      console.log('productListInCart:', this.productListInCart);
      return this.productListInCart;
    }
  }

  deleteProduct(name: string) {
    this.productListInCart = this.productListInCart.filter(
      (item) => item.name !== name
    );
    return this.productListInCart;
  }
}
