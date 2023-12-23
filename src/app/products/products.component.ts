import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input('total') all: number = 0

  @Output()
  testEmiter: EventEmitter<string> = new EventEmitter<string>()

  products = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9]
  add() {
    this.products.push(1)
  }

  emitfunction() {
    console.log("test emit")
    this.testEmiter.emit('test payload')
  }
}
