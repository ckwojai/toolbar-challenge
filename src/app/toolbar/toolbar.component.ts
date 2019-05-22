import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import configJson from './toolbarConfig.json';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() boldEvent = new EventEmitter<boolean>();
  @Output() italicizedEvent = new EventEmitter<boolean>();
  items: any = configJson.toolbarItems;

  onButtonClick(buttonState: boolean, item: any) {
    // Demonstration how this function can be configured to act on sibling component "simple-text"
    switch (item.config.title) {
      case "bold":
        this.boldEvent.emit(buttonState);
        break;
      case "italicized":
        this.italicizedEvent.emit(buttonState);
    }
  }
  onRadioClick(value: string, item: any) {
    // Code can be implemnted below for toolbar to act on the page upon Radio Butons click
  }
  onDropDownClick(value: string, item: any) {
    // Code can be implemnted below for toolbar to act on the page upon Dropdow Butons click
  }
  constructor() {
  }
  ngOnInit() {
  }
}
