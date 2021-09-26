import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  fullName: string = '';

  address: string = '';

  creditCardNumber: string = '';

  products: Product[] = [];

  empty: boolean = true;

  total: number = 0;

  quantityValue: number = 0;

  onChange = (e: any, product: Product) => {
    console.log(e);
    console.log(e.target.value);
    console.log(product);
    this.products = this.cartService.changeInCart(e.target.value, product);
    this.total = this.products.reduce((pre, curr) => {
      const currNum = curr.price * parseInt(curr.quantity as unknown as string);
      return pre + currNum;
    }, 0);
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getProductsInCart();
    console.log(this.products);

    if (this.products.length !== 0) {
      this.empty = false;
      this.total = this.products.reduce((pre, curr) => {
        const currNum =
          curr.price * parseInt(curr.quantity as unknown as string);
        return pre + currNum;
      }, 0);

      console.log(this.total);
    }
  }

  submitForm = () => {
    const paymentInfo = {
      fullName: this.fullName,
      address: this.address,
      creditCardNumber: this.creditCardNumber,
      total: this.total,
    };

    console.log(paymentInfo);
    this.fullName = '';
    this.address = '';
    this.creditCardNumber = '';
    this.total = 0;
  };
}
