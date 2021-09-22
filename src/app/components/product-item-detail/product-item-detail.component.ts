import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product!: Product;

  public options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  backToList = () => {
    this.router.navigateByUrl('/');
  };
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let name = this.route.snapshot.params.productName;

    let cap1stLetter = name.charAt(0).toUpperCase() + name.slice(1);

    console.log(cap1stLetter);

    const promise = this.productsService
      .getProducts()
      .pipe(
        map((products) => products.filter((item) => item.name === cap1stLetter))
      )
      .toPromise();

    promise.then((data) => (this.product = data[0]));
  }
}
