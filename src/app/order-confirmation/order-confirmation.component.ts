import { Component } from '@angular/core';
import { CheckoutForm } from '../type';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  checkoutForm: CheckoutForm = {
    fullname: '',
    address: '',
    creditCard: '',
    total: 0,
  };

  ngOnInit() {
    this.checkoutForm = history.state;
  }
}
