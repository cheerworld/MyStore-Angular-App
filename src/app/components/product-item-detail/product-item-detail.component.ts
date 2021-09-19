import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  //products: Product[] = [];

  product: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let name = this.route.snapshot.params.productName;

    let cap1stLetter = name.charAt(0).toUpperCase() + name.slice(1);

    console.log(cap1stLetter);

    this.productsService.getProducts().subscribe((res) => {
      const products = res;

      this.product = products.filter((item) => {
        console.log(item.name);
        return item.name === cap1stLetter;
      });

      console.log(this.product);
    });
  }
}
