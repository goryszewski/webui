import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output()
  searchEmit: EventEmitter<string> = new EventEmitter<string>()

  changeSearchValue(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value)
    this.searchEmit.emit((<HTMLInputElement>eventData.target).value)

  }


}
