import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-autosize-textarea',
  standalone: true,
  imports: [],
  template: `
    <textarea
      #textarea
      [placeholder]="placeholder"
      [value]="value"
      class="resize-none overflow-hidden focus:outline-orange-400 w-full"
      (click)="$event.stopPropagation()"
      (keyup.enter)="emit(textarea)"
      (input)="calcHeight(textarea)"
    ></textarea>
  `,
  styles: ``,
})
export class AutosizeTextareaComponent {
  // INPUT OUTPUT
  @Input() value = '';
  @Input() placeholder = '';
  @Input() clearAfterEmit = false;

  @Output() submitText = new EventEmitter<string>();

  // variable

  // methods
  protected emit(textarea: HTMLTextAreaElement) {
    this.submitText.emit(textarea.value);

    if (this.clearAfterEmit) {
      textarea.value = '';
    }
  }

  protected calcHeight(textarea: HTMLTextAreaElement) {
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
