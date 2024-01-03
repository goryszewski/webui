import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { ListFetchingError } from '../../utils/list-state.type';

import { wait } from '../../utils/wait';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private URL = 'http://localhost:3000';
  async getAll() {
    await wait();
    return fetch(`${this.URL}/tasks`).then<Task[] | ListFetchingError>((response) => {
      if (response.ok) {
        return response.json();
      }
      return { status: response.status, message: response.statusText };
    });
  }
  async add(name: string) {
    let option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        createdAt: new Date().getTime(),
        name,
        done: false,
      } as Task),
    };

    return fetch(`${this.URL}/tasks`, option).then<Task | Error>((response) => {
      if (response.ok) {
        return response.json();
      }
      return new Error('Cant add task');
    });
  }
}
