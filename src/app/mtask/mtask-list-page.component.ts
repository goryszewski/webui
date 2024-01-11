import { Component, inject } from '@angular/core';
import { MtaskService } from './data-access/mtasks.service';
import { ComponentListState, LIST_STATE_VALUE } from '../utils/list-state.type';
import { Mtask } from './model/Mtask';
import { MtasksListComponent } from './ui/mtasks-list.component';

@Component({
  selector: 'app-image-list-page',
  standalone: true,
  imports: [MtasksListComponent],
  template: `
    @switch (listState.state) {
      @case (listStateValue.SUCCESS) {
        <app-mtasks-list class="block mt-4" [mtasks]="listState.results" />
      }
      @case (listStateValue.ERROR) {
        {{ listState.error.message }}
      }
      @case (listStateValue.LOADING) {
        Loading...
      }
      @default {
        Problem
      }
    }
  `,
  styles: ``,
})
export class MtaskListPageComponent {
  private mtaskService = inject(MtaskService);
  listState: ComponentListState<Mtask> = { state: LIST_STATE_VALUE.IDLE };
  listStateValue = LIST_STATE_VALUE;
  getAllImages(): void {
    this.listState = { state: LIST_STATE_VALUE.LOADING };
    const source$ = this.mtaskService.getAll();

    source$.subscribe({
      next: (response) => {
        console.log(response.body);
        this.listState = {
          state: LIST_STATE_VALUE.SUCCESS,
          results: response.body!,
        };
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        console.log('Get all images completed');
      },
    });
  }
  addImage(): void {}
  ngOnInit() {
    this.getAllImages();
  }
}
