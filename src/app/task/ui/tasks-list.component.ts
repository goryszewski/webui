import { Component, Input, inject } from '@angular/core';
import { Task } from '../model/Task';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherCalendar } from '@ng-icons/feather-icons';
import { TaskUpdatePayload, TasksService } from '../data-access/tasks.service';
import { AutosizeTextareaComponent } from '@ui/autosize-textarea.component';
import { RemoveItemButtonComponent } from '@ui/remove-item-button.component';
import { TaskCardComponent } from './task-card.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  viewProviders: [provideIcons({ featherCalendar })],
  imports: [
    NgIconComponent,
    RemoveItemButtonComponent,
    AutosizeTextareaComponent,
    TaskCardComponent,
  ],
  template: `
    <ul>
      @for (task of tasks; track task.id) {
        <li class="mb-2">
          <!-- {{ $first }} {{ $last }} {{ $index }} {{ $even }} {{ $odd }} {{ $count }} -->
          <app-task-card
            [task]="task"
            (update)="updateTask(task.id, $event)"
            (delete)="delete(task.id)"
          />
        </li>
      } @empty {
        <p>Nie ma taskow</p>
      }
    </ul>
  `,
  styles: [],
})
export class TasksListComponent {
  @Input({ required: true }) tasks: Task[] = [];

  private tasksService = inject(TasksService);

  delete(taskId: number) {
    this.tasksService.delete(taskId).subscribe({
      next: (res) => {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

  updateTask(taskId: number, updatedTask: TaskUpdatePayload) {
    this.tasksService.update(taskId, updatedTask).subscribe({
      next: (res) => {
        this.tasks = this.tasks.map((task) => {
          if (task.id === res.id) {
            return res;
          } else {
            return task;
          }
        });
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
}
