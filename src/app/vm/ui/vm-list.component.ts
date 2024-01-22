import { Component, Input, inject } from '@angular/core';
import { VirtualMachine } from '../model/VirtualMachine';
import { VMCardComponent } from  './vm-card.component'

@Component({
  selector: 'app-vm-list',
  standalone: true,
  imports: [VMCardComponent],
  template: `
    <ul>
      @for (vm of vms; track vm.id) {
        <li class="mb-2">
          <app-vm-card [vm]="vm"/>

        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class VirtualMachinesListComponent {
  @Input({ required: true }) vms: VirtualMachine[] = [];




}
