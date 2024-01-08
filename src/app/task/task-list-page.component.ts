import { Component, inject } from '@angular/core';
import { TasksListComponent } from './ui/tasks-list.component';
import { Task } from './model/Task';
import { NgIf } from '@angular/common';
import { GetAllTasksSearchParams, TasksService } from './data-access/tasks.service';
import { ComponentListState, LIST_STATE_VALUE } from '../utils/list-state.type';
import { SubmitTextComponent } from '@ui/submit-text.component';
import {
  TasksListFiltersComponent,
  TasksListFiltersFormValue,
} from './ui/task-list-filters.component';
import { getAllTasksSearchParams } from './data-access/tasks-filters.adapter';

@Component({
  selector: 'app-task-list-page',
  standalone: true,
  template: `
    <app-submit-text
      (submitText)="
        listState.state === listStateValue.SUCCESS && addTask($event, listState.results)
      "
    />
    <app-tasks-list-filters (filtersChange)="handleFiltersChange($event)" />
    <app-tasks-list
      *ngIf="listState.state === listStateValue.SUCCESS"
      class="block mt-4"
      [tasks]="listState.results"
    />
    <p *ngIf="listState.state === listStateValue.ERROR">
      {{ listState.error.message }}
    </p>
    <p *ngIf="listState.state === listStateValue.LOADING">Loading...</p>
  `,
  styles: [
    `
      details {
        border: 1px solid #aaa;
        border-radius: 4px;
        padding: 0.5em 0.5em 0;
        width: 300px;
        margin: 1em 0;
      }

      summary {
        font-weight: bold;
        margin: -0.5em -0.5em 0;
        padding: 0.5em;
      }

      summary:before {
        content: '👉';
        display: inline-block;
        font-size: 0.8em;
        padding: 0 0.5em;
        transition: transform 0.2s ease-in-out;
      }

      details[open] > summary:before {
        transform: rotate(90deg);
      }
    `,
  ],
  imports: [TasksListComponent, SubmitTextComponent, NgIf, TasksListFiltersComponent],
})
export class TaskListPageComponent {
  private tasksService = inject(TasksService);

  listState: ComponentListState<Task> = { state: LIST_STATE_VALUE.IDLE };
  listStateValue = LIST_STATE_VALUE;

  ngOnInit() {
    // this.getAllTasks(getAllTasksSearchParams(this.form.getRawValue()));
  }

  handleFiltersChange(filters: TasksListFiltersFormValue): void {
    this.getAllTasks(getAllTasksSearchParams(filters));
  }

  getAllTasks(searchParams: GetAllTasksSearchParams): void {
    this.listState = { state: LIST_STATE_VALUE.LOADING };

    this.tasksService.getAll(searchParams).then((response) => {
      if (Array.isArray(response)) {
        this.listState = {
          state: LIST_STATE_VALUE.SUCCESS,
          results: response,
        };
      } else {
        this.listState = {
          state: LIST_STATE_VALUE.ERROR,
          error: response,
        };
      }
    });
  }

  addTask(name: string, tasks: Task[]): void {
    this.tasksService.add(name).then((response) => {
      if ('id' in response) {
        this.listState = {
          state: LIST_STATE_VALUE.SUCCESS,
          results: tasks.concat(response),
        };
      } else {
        alert(response.message);
      }
    });
  }
}
