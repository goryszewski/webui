import { HttpClient } from '@angular/common/http';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-products',
  template: `
    <div>
      <button type="button" class="btn btn-primary" (click)="emitfunction(testid)">{{testid}}</button>
      <table class="table">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
              </tr>
          </thead>
          <tbody>
              <tr *ngFor="let item of images ; let i = index">
                  <td>{{i}}</td>
                  <td>{{item}}</td>
                  <td [ngStyle]="{color: item === 1 ? 'red' : 'green' }">Otto</td>
                  <td>
                      <div *ngIf="item!=1 ; else ttttt"><button (click)="testid = i"> DELETE</button></div>
                      <ng-template #ttttt>
                          <div>Update</div>
                      </ng-template>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
  `,
  styles: []

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
