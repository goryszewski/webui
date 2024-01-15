import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Mtask } from '../model/Mtask';
import { MTasksListFiltersFormValue } from '../ui/mtask-add.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MtaskService {
  private http = inject(HttpClient);
  private URL = environment.link;

  getAll() {
    return this.http.get<Mtask[]>(`${this.URL}/api/tasks`, {
      observe: 'response',
    });
  }
  getById() {}

  delete(mtaskId: number) {
    return this.http.delete<number>(`${this.URL}/api/tasks/${mtaskId}`);
  }

  add(payload: MTasksListFiltersFormValue) {
    console.log(payload);
    return this.http.post<Mtask>(`${this.URL}/api/tasks`, {
      ...payload,
    });
  }
}
