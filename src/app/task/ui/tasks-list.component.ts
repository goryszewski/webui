import { NgFor, NgIf } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherCalendar } from '@ng-icons/feather-icons';
import { Component, Input, inject } from '@angular/core';
import { Task } from '../model/Task';
import { TaskCardComponent } from './task-card.component';
import { TaskUpdatePayload, TasksService } from '../data-access/tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  viewProviders: [provideIcons({ featherCalendar })],
  template: `
    <ul>
      <li *ngFor="let task of tasks" class="mb-2">
        <app-task-card
          [task]="task"
          (update)="updateTask(task.id, $event)"
          (delete)="delete(task.id)"
        />
      </li>
    </ul>
  `,
  styles: ``,
  imports: [NgFor, NgIf, NgIconComponent, TaskCardComponent],
})
export class TasksListComponent {
  // INPUT OUTPUT
  @Input({ required: true }) tasks: Task[] = [];

  // variable
  removeMode = false;
  editMode = false;
  isSingleClick = true;

  private tasksService = inject(TasksService);

  // methods

  updateTask(taskId: number, updatedTask: TaskUpdatePayload) {
    this.tasksService.update(taskId, updatedTask).then((res) => {
      if (res instanceof Error) {
        alert(res.message);
      } else {
        this.tasks = this.tasks.map((task) => {
          if (task.id === res.id) {
            return res;
          } else {
            return task;
          }
        });
      }
    });
  }

  delete(taskId: number) {
    this.tasksService.del(taskId).then((res) => {
      if (res instanceof Error) {
        alert(res.message);
      } else {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        console.log('done delete');
      }
    });
  }

  toggleDoneStatus(task: Task, event: Event) {
    task.done = !task.done;
    console.log(event);
  }
}
