import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../model/Task';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { RemoveItemButtonComponent } from '../../shared/ui/remove-item-button.component';
import { AutosizeTextareaComponent } from '../../shared/ui/autosize-textarea.component';
import { TaskUpdatePayload } from '../data-access/tasks.service';
import { CustomDatePipe } from '../../utils/pipes/CustomDatePipe';
import { bootstrapBookmark, bootstrapBookmarkFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-task-card',
  standalone: true,
  viewProviders: [provideIcons({ bootstrapBookmarkFill, bootstrapBookmark })],
  template: `
    <div class="rounded-md shadow-md p-4 block" [class.bg-green-300]="task.done">
      <button
        class="w-full"
        (click)="!editMode && handleSingleClick()"
        (dblclick)="switchToEditMode()"
      >
        <header class="flex justify-end">
          <app-remove-item-button (confirm)="remove(task)" />
        </header>
        <section class="text-left">
          @if (editMode) {
            <app-autosize-textarea
              (keyup.escape)="editMode = false"
              (submitText)="updateTaskName($event)"
              [value]="task.name"
            />
          } @else {
            <span [class.line-through]="task.done">{{ task.name }} </span>
          }
        </section>
        <footer class=" pt-2 flex items-center justify-end">
          <span class="text-xs pr-1">{{ task.createdAt | customeDatePipe }} </span>
          <ng-icon name="featherCalendar" class="text-sm" />
        </footer>
      </button>
    </div>
  `,
  styles: ``,
  imports: [
    NgIconComponent,
    CustomDatePipe,
    RemoveItemButtonComponent,
    AutosizeTextareaComponent,
  ],
})
export class TaskCardComponent {
  // INPUT OUTPUT
  @Input({ required: true }) task!: Task;
  @Output() update = new EventEmitter<TaskUpdatePayload>();
  @Output() delete = new EventEmitter<void>();

  // variable
  isSingleClick = true;
  editMode: boolean = false;

  // methods
  formatDate() {
    // return new Date(this.task.createdAt);
    return Intl.DateTimeFormat('pl').format(this.task.createdAt);
  }

  switchToEditMode() {
    this.isSingleClick = false;
    this.editMode = true;
  }

  handleSingleClick() {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.update.emit({ done: !this.task.done });
      }
    });
  }

  updateTaskName(updateName: string) {
    this.update.emit({ name: updateName });
    this.editMode = false;
  }

  remove(task: Task) {
    this.delete.emit();
    console.log('Delete Task Id:', task.id);
  }
}
