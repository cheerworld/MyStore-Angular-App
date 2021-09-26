import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  empty: boolean = true;

  total: number = 0;

  quantityValue: number = 0;

  onChange = (e: any, product: Product) => {
    console.log(e);
    console.log(e.target.value);
    console.log(product);
    if (e.target.value <= 0) {
      this.products = this.products.filter((p) => p.id !== product.id);
      if (this.products.length === 0) {
        this.empty = true;
      }
    }
    this.cartService.changeInCart(e.target.value, product);
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getProductsInCart();
    console.log(this.products);
    if (this.products.length !== 0) {
      this.empty = false;
    }
  }
}
