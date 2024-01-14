import { Component, Input, inject } from '@angular/core';
import { Mtask } from '../model/Mtask';
import { MtaskCardComponent } from './mtask-card.component';
import { MtaskService } from '../data-access/mtasks.service';

@Component({
  selector: 'app-mtasks-list',
  standalone: true,
  imports: [MtaskCardComponent],
  template: `
    <ul>
      @for (mtask of mtasks; track mtask.id) {
        <li class="mb-2">
          <app-mtask-card [mtask]="mtask" (deleteMtASK)="deletef(mtask.id)" />
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class MtasksListComponent {
  @Input({ required: true }) mtasks: Mtask[] = [];

  private mtaskService = inject(MtaskService);

  deletef(mtaskid: number): void {
    console.log('delete:' + mtaskid);
    const source$ = this.mtaskService.delete(mtaskid).subscribe({
      next: (res) => {
        this.mtasks = this.mtasks.filter((mtask) => mtask.id !== mtaskid);
      },
    });
  }
}
