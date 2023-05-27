import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../type';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem; 
  @Output() cartUpdated: EventEmitter<boolean> = new EventEmitter();
  quantity: number = 0;

  constructor(private cartService: CartService) {
    this.item = {
      product: {
        id: 0,
        name: '',
        price: 0,
        url: '',
        description: '',
      },
      quantity: 0,
    }
  }

  ngOnInit(): void {
    this.quantity = this.item.quantity;
  }

  onQuantityChange() {
    this.cartService.updateQuantity(this.item, this.quantity);
  }

  removeItem() {
    this.cartService.removeItem(this.item);
    this.cartUpdated.emit(true);
  }
}
