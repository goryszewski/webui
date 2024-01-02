import { NgFor, NgIf } from '@angular/common';

import { Component, Input } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <ul>
      <li *ngFor="let task of tasks" class="mb-2">
        <div class="rounded-md shadow-md p-4 block" [class.bg-green-300]="task.done">
          <button class="w-full">
            <header class="flex justify-end"></header>
            <section class="text-left">
              {{ task.name }}
              <ng-template #previewModeTemplate>
                <span [class.line-through]="task.done">
                  {{ task.name }}
                </span>
              </ng-template>
            </section>
            <footer class=" pt-2 flex items-center justify-end"></footer>
          </button>
        </div>
      </li>
    </ul>
  `,
  styles: ``,
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
