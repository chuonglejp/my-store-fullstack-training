import { Component, OnInit } from '@angular/core';
import { Product } from '../type';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  quantity: number = 1;

  constructor (private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit() {
    this.product = history.state;
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.quantity);
    alert('Added to cart!');
  }
}
