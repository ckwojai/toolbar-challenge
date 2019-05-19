import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as config from './toolbar_config.json';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() bold_event = new EventEmitter<boolean>();

  dropdown_config: any = config.dropdown;
  state_button_config: any = config.state_button;
  radio_buttons_config: any = config.radio_buttons;
  url_button_config: any = config.url_button;

  button_onClicked(button_state: boolean) {
    if (button_state) {
      console.log("button clicked");
      this.bold_event.emit(button_state);
    } else {
      console.log("button unclicked");
      this.bold_event.emit(button_state);
    }
  }
  radio_onClicked(value: string) {
    console.log(value);
  }
  dropDownEventHandler(value: string) {
    console.log(value);
  }
  constructor() {
  }
  ngOnInit() {
    console.log();
  }
}
