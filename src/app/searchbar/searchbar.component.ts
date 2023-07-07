import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  queryValue: string = ""
  constructor() {

  }

  @Output() newItemEvent = new EventEmitter<string>();

  searchRequest = () => this.newItemEvent.emit(this.queryValue);

}
