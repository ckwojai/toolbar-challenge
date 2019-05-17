import { Component, OnInit } from '@angular/core';
import * as config from './toolbar_config.json';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  dropdown_config: any = config.dropdown;
  state_button_config: any = config.state_button;
  radio_buttons_config: any = config.radio_buttons;

  button_onClicked(button_state: boolean) {
    if (button_state) {
      console.log("button clicked");
    } else {
      console.log("button unclicked");
    }
  }
  radio_onClicked(value: string) {
    console.log(value);
  }
  constructor() {
  }
  ngOnInit() {
    console.log();
  }
}
