import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Image } from '../model/Image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private http = inject(HttpClient);
  private URL = 'http://localhost:3000';

  getAll() {
    return this.http.get<Image[]>(`${this.URL}/images`, {
      observe: 'response',
    });
  }
}
