import { Component, Input } from '@angular/core';
import { Task } from '../model/Task';
import { NgIconComponent } from '@ng-icons/core';
import { RemoveItemButtonComponent } from '../../shared/ui/remove-item-button.component';
import { AutosizeTextareaComponent } from '../../shared/ui/autosize-textarea.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-task-card',
  standalone: true,
  template: `
    <div class="rounded-md shadow-md p-4 block" [class.bg-green-300]="task.done">
      <button
        class="w-full"
        (click)="!editMode && handleSingleClick()"
        (dblclick)="switchToEditMode()"
      >
        <header class="flex justify-end">
          <!-- <app-remove-item-button (confirm)="delete.emit()" /> -->

          <app-remove-item-button (confirm)="remove(task)" />
        </header>
        <section class="text-left">
          <app-autosize-textarea
            *ngIf="editMode; else previewModeTemplate"
            (keyup.escape)="editMode = false"
            (submitText)="updateTaskName($event)"
            [value]="task.name"
          />
          <ng-template #previewModeTemplate>
            <span [class.line-through]="task.done"> f {{ task.name }} </span>
          </ng-template>
        </section>
        <footer class=" pt-2 flex items-center justify-end">
          <ng-icon name="featherCalendar" class="text-sm" />
        </footer>
      </button>
    </div>
  `,
  styles: ``,
  imports: [NgIf, NgIconComponent, RemoveItemButtonComponent, AutosizeTextareaComponent],
})
export class TaskCardComponent {
  switchToEditMode() {
    this.isSingleClick = false;
    this.editMode = true;
  }
  handleSingleClick() {
    console.log('002');
    this.isSingleClick = true;
  }
  updateTaskName($event: string) {
    this.editMode = false;
  }
  isSingleClick = true;
  editMode: boolean = false;
  @Input({ required: true }) task!: Task;

  remove(task: Task) {
    console.log('Delete Task Id:', task.id);
  }
}
