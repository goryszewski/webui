import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9]
  add() {
    this.products.push(1)
  }
}
