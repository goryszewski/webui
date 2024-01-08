import { Injectable, inject } from '@angular/core';
import { Task } from '../model/Task';
import { HttpClient } from '@angular/common/http';

export type TaskUpdatePayload = { done?: boolean; name?: string };

export type GetAllTasksSearchParams = {
  q: string;
  _sort: 'createdAt';
  _order: 'desc' | 'asc';
  done_like: 'true' | 'false' | '';
};

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private http = inject(HttpClient);
  private URL = 'http://localhost:3000';

  constructor() {}

  getAll(searchParams: GetAllTasksSearchParams) {
    return this.http.get<Task[]>(`${this.URL}/tasks/`, {
      observe: 'response',
      params: searchParams,
    });
  }

  delete(taskId: number) {
    return this.http.delete<Task>(`${this.URL}/tasks/${taskId}`);
  }

  update(taskId: number, payload: TaskUpdatePayload) {
    return this.http.patch<Task>(`${this.URL}/tasks/${taskId}`, payload);
  }

  add(name: string) {
    return this.http.post<Task>(`${this.URL}/tasks`, {
      name,
      done: false,
    });
  }
}
