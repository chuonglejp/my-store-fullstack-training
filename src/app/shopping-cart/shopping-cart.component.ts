import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: CartItem[] = [];
  fullname: string = '';
  address: string = '';
  creditCard: string = '';
  total: number = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchItems();
  };

  fetchItems() {
    this.items = this.cartService.items;
    let total = 0;
    for (const item of this.items) {
      total += item.product.price * item.quantity;
    }
    this.total = total;
  }

  onSubmit() {
    const checkoutForm = {
      fullname: this.fullname, 
      address: this.address, 
      creditCard: this.creditCard,
      total: this.total,
    }
    this.cartService.resetCart();
    this.router.navigateByUrl('/order-confirmation', { state: checkoutForm });
  }
}
