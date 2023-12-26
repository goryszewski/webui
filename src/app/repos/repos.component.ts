import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
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
