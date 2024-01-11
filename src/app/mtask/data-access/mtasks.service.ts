import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Mtask } from '../model/Mtask';

@Injectable({
  providedIn: 'root',
})
export class MtaskService {
  private http = inject(HttpClient);
  private URL = 'http://localhost:5000';

  getAll() {
    return this.http.get<Mtask[]>(`${this.URL}/api/tasks`, {
      observe: 'response',
    });
  }
}
