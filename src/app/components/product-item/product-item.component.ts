import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  public options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public onClickChange = () => {
    this.router.navigateByUrl(`/${this.product.name}`);
  };
  constructor(private router: Router) {
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
