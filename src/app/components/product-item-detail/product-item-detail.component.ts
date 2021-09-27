import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product!: Product;
  public selectedOption: number = 1;

  public options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let name = this.route.snapshot.params.productName;

    let cap1stLetter = name.charAt(0).toUpperCase() + name.slice(1);

    this.cartService.productListInCart.filter((p) => p.name === cap1stLetter);

    const promise = this.productsService
      .getProducts()
      .pipe(
        map((products) => products.filter((item) => item.name === cap1stLetter))
      )
      .toPromise();

    promise.then((data) => (this.product = data[0]));
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(this.selectedOption, product);
    alert('Added to Cart!');
  }
}
