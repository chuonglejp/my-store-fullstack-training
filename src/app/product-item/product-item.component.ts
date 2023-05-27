import { Component, Input } from '@angular/core';
import { Product } from '../type';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product; 
  quantity: number = 1;

  constructor(private router: Router, private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  gotoProductDetail() {
    this.router.navigateByUrl('/products/' + this.product.id, { state: this.product });
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.quantity);
    alert('Added to cart!');
  }
}
