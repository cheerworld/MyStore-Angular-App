import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  public selectedOption: number = 1;

  public options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public onClickChange = () => {
    this.router.navigateByUrl(`/${this.product.name}`);
  };

  public addToCart(product: Product) {
    console.log(this.selectedOption);
    console.log('product quantity before added', product['quantity']);

    const quantityToInt = parseInt(product['quantity'] as unknown as string);
    const optionToInt = parseInt(this.selectedOption as unknown as string);
    const addQuantity = quantityToInt + optionToInt;
    console.log(addQuantity);
    product['quantity'] = addQuantity;
    console.log('product quantity after added', product['quantity']);
    console.log(product);
    this.cartService.addToCart(product);
    alert('Added to Cart!');
  }

  constructor(private router: Router, private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}
}
