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
    this.router.navigateByUrl(`/product/${this.product.name}`);
  };

  public addToCart(product: Product) {
    this.cartService.addToCart(this.selectedOption, product);
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
