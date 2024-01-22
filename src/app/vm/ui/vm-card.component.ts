import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VirtualMachine } from '../model/VirtualMachine';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapBookmark, bootstrapBookmarkFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-vm-card',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ bootstrapBookmarkFill, bootstrapBookmark })],
  template: `
    <div class="rounded-md shadow-md flex p-1 ">
      <button class="w-full" (click)="delete()">
        <header class="flex justify-end">remove</header>
        <section class="text-left">
          @if (editMode) {
          } @else {
            <span
              >Name: {{ vm.name }} - Status: {{ vm.status }}</span
            >
          }
        </section>
        <footer class=" pt-1 flex justify-between">
          <button class="flex items-center">
            <ng-icon class="text-sm" />
          </button>
          <div class="flex items-center justify-end">
            <span class="text-xs pr-1">-</span>
            <ng-icon name="featherCalendar" class="text-sm" />
          </div>
        </footer>
      </button>
    </div>
  `,
  styles: ``,
})
export class VMCardComponent {
  @Input({ required: true }) vm!: VirtualMachine;
  @Output() deleteMtASK = new EventEmitter<void>();
  editMode: boolean = false;

  delete() {
    console.log('delete');
    this.deleteMtASK.emit();
  }
}
