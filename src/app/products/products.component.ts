import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductsService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.service.getProducts().subscribe(data => {
      this.products = data;
    });
  };

}
