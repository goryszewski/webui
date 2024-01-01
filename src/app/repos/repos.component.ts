import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  template:`
    <div>
      <hr>
      <app-search (searchEmit)="limitvalue($event)"></app-search>
      <table class="table">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col" appBetterhl appHighlight>First</th>
              </tr>
          </thead>
          <tbody>
              <tr *ngFor="let item of returnImages() ; let i = index">
                  <td appHighlight>
                      {{i}}
                  </td>
                  <td appHover>{{item}}</td>
              </tr>
          </tbody>
      </table>
    </div>
  `,
  styles:[".c {padding: 10px;color: green}"]
})
export class ReposComponent implements OnInit {

  url: string = "http://repo.internal:5000"

  images: [] = []

  limit: string = ""

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getImages()
  }

  returnImages() {
    return this.images.filter((image: string) => image.includes(this.limit))
  }

  getImages() {
    this.http.get(this.url + "/v2/_catalog").subscribe((res) => {
      this.images = res['repositories']
    })
    // https://www.baeldung.com/ops/docker-registry-api-list-images-tags
  }
  limitvalue(event: string) {
    this.limit = event
  }

}
