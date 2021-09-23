import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product!: Product;

  select = false;

  public options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  backToList = () => {
    this.router.navigateByUrl('/');
  };
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let name = this.route.snapshot.params.productName;

    let cap1stLetter = name.charAt(0).toUpperCase() + name.slice(1);

    console.log(cap1stLetter);

    const productInCart = this.cartService.productListInCart.filter(
      (p) => p.name === cap1stLetter
    );
    console.log(productInCart);
    if (productInCart.length === 1) {
      this.product = productInCart[0];
      this.select = true;
      console.log(this.product);
    } else {
      const promise = this.productsService
        .getProducts()
        .pipe(
          map((products) =>
            products.filter((item) => item.name === cap1stLetter)
          )
        )
        .toPromise();

      promise.then((data) => (this.product = data[0]));
    }
  }
}
