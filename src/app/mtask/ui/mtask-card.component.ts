import { Component, Input } from '@angular/core';
import { Mtask } from '../model/Mtask';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapBookmark, bootstrapBookmarkFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-mtask-card',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ bootstrapBookmarkFill, bootstrapBookmark })],
  template: `
    <div class="rounded-md shadow-md p-4 block">
      <button class="w-full">
        <header class="flex justify-end">remove</header>
        <section class="text-left">
          @if (editMode) {
          } @else {
            <span
              >{{ mtask.name }}<br />
              {{ mtask.describe }}</span
            >
          }
        </section>
        <footer class=" pt-2 flex justify-between">
          <button class="flex items-center">
            <ng-icon class="text-sm" />
          </button>
          <div class="flex items-center justify-end">
            <span class="text-xs pr-1">{{ mtask.autor }} </span>
            <ng-icon name="featherCalendar" class="text-sm" />
          </div>
        </footer>
      </button>
    </div>
  `,
  styles: ``,
})
export class MtaskCardComponent {
  @Input({ required: true }) mtask!: Mtask;
  editMode: boolean = false;
}
