import { Component, Input, inject } from '@angular/core';
import { TasksListComponent } from './ui/tasks-list.component';
import { Task } from './model/Task';
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
    @switch (listState.state) {
      @case (listStateValue.SUCCESS) {
        <app-tasks-list class="block mt-4" [tasks]="listState.results" />
      }
      @case (listStateValue.ERROR) {
        {{ listState.error.message }}
      }
      @case (listStateValue.LOADING) {
        Loading...
      }
    }
    <!-- @default -->
  `,

  imports: [TasksListComponent, SubmitTextComponent, TasksListFiltersComponent],
})
export class TaskListPageComponent {
  @Input() projectId?: number;
  private tasksService = inject(TasksService);

  listState: ComponentListState<Task> = { state: LIST_STATE_VALUE.IDLE };
  listStateValue = LIST_STATE_VALUE;

  ngOnInit() {
    console.log(this.projectId);
  }

  handleFiltersChange(filters: TasksListFiltersFormValue): void {
    this.getAllTasks(getAllTasksSearchParams(filters));
  }

  getAllTasks(searchParams: GetAllTasksSearchParams): void {
    this.listState = { state: LIST_STATE_VALUE.LOADING };
    const source$ = this.projectId
      ? this.tasksService.getAllByProjectId(this.projectId, searchParams)
      : this.tasksService.getAll(searchParams);
    source$.subscribe({
      next: (response) => {
        console.log(response);
        this.listState = {
          state: LIST_STATE_VALUE.SUCCESS,
          results: response.body!,
        };
      },
      error: (err) => {
        this.listState = {
          state: LIST_STATE_VALUE.ERROR,
          error: err,
        };
      },
      complete: () => {
        console.log('task complete');
      },
    });
  }

  addTask(name: string, tasks: Task[]): void {
    this.tasksService.add(name).subscribe({
      next: (res) => {
        this.listState = {
          state: LIST_STATE_VALUE.SUCCESS,
          results: tasks.concat(res),
        };
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
}
