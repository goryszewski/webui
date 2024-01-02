import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TasksListComponent } from './tasks-list.component';
import { SubmitTextComponent } from './submit-text.component';
import { Task } from './Task';

type ListFetchingError = { status: number; message: string };

type IdleState = {
  state: 'idle';
};
type LoadingState = {
  state: 'loading';
};
type SuccessState = {
  state: 'success';
  results: Task[];
};
type ErrorState = {
  state: 'error';
  error: ListFetchingError;
};

type ComponentListState = IdleState | LoadingState | SuccessState | ErrorState;

@Component({
  selector: 'app-task-list-page',
  standalone: true,
  imports: [NgIf, NgFor, TasksListComponent, SubmitTextComponent],
  template: `
    <app-submit-text
      (submitText)="listState.state === 'success' && addTask($event, listState.results)"
    />
    <app-tasks-list
      *ngIf="listState.state === 'success'"
      [tasks]="listState.results"
      class="block mt-4"
    />
    <p *ngIf="listState.state === 'error'">{{ listState.error.message }}</p>

    <p *ngIf="listState.state === 'loading'">Loading....</p>
  `,
  styles: [
    `
      input:focus + button {
        @apply text-orange-400;
      }
    `,
  ],
})
export class TaskListPageComponent {
  listState: ComponentListState = { state: 'idle' };

  private readonly URL = 'http://localhost:3000';

  constructor() {
    this.listState.state = 'loading';
    fetch(`${this.URL}/tasks`)
      .then<Task[] | ListFetchingError>((response) => {
        if (response.ok) {
          return response.json();
        }
        return { status: response.status, message: response.statusText };
      })
      .then((response) => {
        setTimeout(() => {
          if (Array.isArray(response)) {
            this.listState = { state: 'success', results: response };
          } else {
            this.listState = { state: 'error', error: response };
          }
        }, 2000);
      });
  }

  addTask(name: string, tasks: Task[]) {
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

    fetch(`${this.URL}/tasks`, option)
      .then<Task | Error>((response) => {
        if (response.ok) {
          return response.json();
        }
        return new Error('Cant add task');
      })
      .then((response) => {
        if ('id' in response) {
          this.listState = {
            state: 'success',
            results: tasks.concat(response),
          };
        } else {
          alert(response.message);
        }
      });
  }
}
