import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-submit-text',
  standalone: true,
  imports: [],
  template: `
    <div>
      <input
        (keyup.enter)="submitText.emit(inputTask.value); inputTask.value = ''"
        #inputTask
        class="border-b border-b-orange-400 outline-none"
      />
      <button
        (click)="submitText.emit(inputTask.value); inputTask.value = ''"
        class="border border-orange-400 ml-4 px-4"
      >
        Add
      </button>
    </div>
  `,
  styles: ``,
})
export class SubmitTextComponent {
  @Output() submitText = new EventEmitter<string>();
}
