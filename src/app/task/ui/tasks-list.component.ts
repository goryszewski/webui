import { NgFor, NgIf } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherCalendar } from '@ng-icons/feather-icons';
import { Component, Input } from '@angular/core';
import { Task } from '../model/Task';
import { TaskCardComponent } from './task-card.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  viewProviders: [provideIcons({ featherCalendar })],
  template: `
    <ul>
      <li *ngFor="let task of tasks" class="mb-2">
        <app-task-card [task]="task" />
      </li>
    </ul>
  `,
  styles: ``,
  imports: [NgFor, NgIf, NgIconComponent, TaskCardComponent],
})
export class TasksListComponent {
  @Input({ required: true }) tasks: Task[] = [];
  removeMode = false;
  editMode = false;

  isSingleClick = true;
  toggleDoneStatus(task: Task, event: Event) {
    task.done = !task.done;
    console.log(event);
  }
}
