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
    console.log("state button got clicked");
    console.log(item.config.title);
    switch (item.config.title) {
      case "bold":
        console.log("inside bold event emitter");
        this.boldEvent.emit(buttonState);
        break;
      case "italicized":
        console.log("inside ital event emitter");
        this.italicizedEvent.emit(buttonState);
    }
    console.log(item.config.title);
  }
  onRadioClick(value: string, item: any) {
    console.log(value);
  }
  onDropDownClick(value: string, item: any) {
    console.log(value);
  }
  constructor() {
  }
  ngOnInit() {
    console.log(this.items);
  }
}
