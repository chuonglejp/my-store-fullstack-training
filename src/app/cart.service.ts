import { Injectable } from '@angular/core';
import { CartItem, Product } from './type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  localKey: string = 'cart';

  constructor() {
    this.loadCart();
  }

  addToCart(product: Product, quantity: number) {
    const qty = parseInt(quantity.toString());
    for (const item of this.items) {
      if (item.product.id === product.id) {
        console.log(item.quantity, quantity);
        item.quantity += qty;
        return;
      }
    }
    this.items.push({ product, quantity: qty });
    localStorage.setItem(this.localKey, JSON.stringify(this.items));
  }

  updateQuantity(target: CartItem, qty: number) {
    for (const item of this.items) {
      if (target.product.id === item.product.id) {
        item.quantity = qty;
        localStorage.setItem(this.localKey, JSON.stringify(this.items));
        return;
      }
    }
  }

  removeItem(target: CartItem) {
    const newItems: CartItem[] = [];
    for (const item of this.items) {
      if (target.product.id !== item.product.id) {
        newItems.push(item);
      }
    }
    this.items = newItems;
    localStorage.setItem(this.localKey, JSON.stringify(this.items));
  }

  loadCart() {
    const localData = localStorage.getItem(this.localKey);
    if (localData) {
      this.items = JSON.parse(localData);
    }
  }

  resetCart() {
    this.items = [];
    localStorage.setItem(this.localKey, '');
  }
}
