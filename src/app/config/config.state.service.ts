import { Injectable, signal } from '@angular/core';

export type TaskListView = 'kanban' | 'list';
type AppConfigState = {
  taskListView: TaskListView;
};

@Injectable({
  providedIn: 'root',
})
export class AppConfigStateService {
  private state = signal<AppConfigState>({
    taskListView: 'list',
  });

  $value = this.state.asReadonly();

  updateTaskListView(value: TaskListView) {
    this.state.update((state) => {
      return {
        ...state,
        taskListView: value,
      };
    });
  }
}
