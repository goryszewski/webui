import { HttpClient } from '@angular/common/http';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  @Input('total') all: number = 0

  @Output()
  testEmiter: EventEmitter<number> = new EventEmitter<number>()
  images: any = {}
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    let uri: string = "http://repo.internal:5000/v2/_catalog"
    this.http.get(uri)
      .subscribe((res) => {
        console.log(res)
        this.images = res['repositories']
      })
  }


  products = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9]
  add() {
    this.products.push(1)
  }
  testid: number = 0

  emitfunction(id: number) {
    console.log("test emit")
    this.testEmiter.emit(id)
  }
}
