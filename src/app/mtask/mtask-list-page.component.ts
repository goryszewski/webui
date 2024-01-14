import { Component, inject } from '@angular/core';
import { MtaskService } from './data-access/mtasks.service';
import { ComponentListState, LIST_STATE_VALUE } from '../utils/list-state.type';
import { Mtask } from './model/Mtask';
import { MtasksListComponent } from './ui/mtasks-list.component';
import { MTasksListFiltersFormValue, MtaskAddComponent } from './ui/mtask-add.component';

@Component({
  selector: 'app-image-list-page',
  standalone: true,
  imports: [MtasksListComponent, MtaskAddComponent],
  template: `
    <app-mtask-add
      (addMtask)="
        listState.state === listStateValue.SUCCESS && addMtask($event, listState.results)
      "
    />
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

  addMtask(task: MTasksListFiltersFormValue, mtasks: Mtask[]): void {
    const source$ = this.mtaskService.add(task).subscribe({
      next: (res) => {
        this.listState = {
          state: LIST_STATE_VALUE.SUCCESS,
          results: mtasks.concat(res),
        };
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        console.log('Done add task');
      },
    });
  }
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
