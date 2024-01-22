import { Component, inject } from '@angular/core';
import { VirtualMachineService } from './data-access/VirtualMachine.service'
import { ComponentListState, LIST_STATE_VALUE } from '../utils/list-state.type';
import { VirtualMachine } from './model/VirtualMachine';
import { VirtualMachinesListComponent } from './ui/vm-list.component'


@Component({
  selector: 'app-virtualmachine-list-page',
  standalone: true,
  imports: [VirtualMachinesListComponent],
  template: `
    @switch (listState.state) {
      @case (listStateValue.SUCCESS) {
        <app-vm-list [vms]="listState.results"/>
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
export class VirtualMachineListPageComponent {
  private service = inject(VirtualMachineService);
  listState: ComponentListState<VirtualMachine> = { state: LIST_STATE_VALUE.IDLE };
  listStateValue = LIST_STATE_VALUE;


  getAllImages(): void {
    this.listState = { state: LIST_STATE_VALUE.LOADING };
    const source$ = this.service.getAll();

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
