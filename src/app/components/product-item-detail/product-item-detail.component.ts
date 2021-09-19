import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  products: Observable<Product[]> | undefined;

  product: Observable<any> | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let name = this.route.snapshot.params.productName;

    let cap1stLetter = name.charAt(0).toUpperCase() + name.slice(1);

    console.log(cap1stLetter);

    this.products = this.productsService.getProducts();

    this.product = this.products.pipe(
      map((products) => products.filter((item) => item.name === cap1stLetter))
    );
    console.log(this.product);
  }
}
