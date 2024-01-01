import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Image</span>
      <input type="text" (input)="changeSearchValue($event)">
    </div>
  `,
  styles:[]
})
export class SearchComponent {

  @Output()
  searchEmit: EventEmitter<string> = new EventEmitter<string>()

  changeSearchValue(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value)
    this.searchEmit.emit((<HTMLInputElement>eventData.target).value)

  }


}
