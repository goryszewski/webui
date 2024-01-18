import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Image } from '../model/Image';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private http = inject(HttpClient);
  private URL = environment.link;

  getAll() {
    return this.http.get<Image[]>(`${this.URL}/images`, {
      observe: 'response',
    });
  }
}
