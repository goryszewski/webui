import { Component, Input } from '@angular/core';
import { Mtask } from '../model/Mtask';
import { MtaskCardComponent } from './mtask-card.component';

@Component({
  selector: 'app-mtasks-list',
  standalone: true,
  imports: [MtaskCardComponent],
  template: `
    <ul>
      @for (mtask of mtasks; track mtask._id) {
        <li class="mb-2">
          <app-mtask-card [mtask]="mtask" />
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class MtasksListComponent {
  @Input({ required: true }) mtasks: Mtask[] = [];
}
