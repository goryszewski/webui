import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TasksListComponent } from './tasks-list.component';
import { SubmitTextComponent } from './submit-text.component';
import { Task } from './Task';
import { TasksService } from './tasks.service';
import { ComponentListState } from './list-state.type';

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
export class TaskListPageComponent implements OnInit {
  listState: ComponentListState<Task> = { state: 'idle' };

  // tasksService = inject(TasksService);

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.listState.state = 'loading';
    this.tasksService.getAll().then((response) => {
      if (Array.isArray(response)) {
        this.listState = { state: 'success', results: response };
      } else {
        this.listState = { state: 'error', error: response };
      }
    });
  }

  addTask(name: string, tasks: Task[]) {
    this.tasksService.add(name).then((response) => {
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
