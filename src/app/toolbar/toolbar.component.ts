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
  constructor() {
  }
  button_onclicked(button_state: boolean) {
    if (button_state) {
      console.log("button clicked");
    } else {
      console.log("button unclicked");
    }
  }
  ngOnInit() {
    console.log(this.state_button_config);
  }

}
