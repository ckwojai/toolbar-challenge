import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as config from './toolbarConfig.json';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() boldEvent = new EventEmitter<boolean>();

  configDropDown: any = config.dropdown;
  configStateButton: any = config.stateButton;
  configRadioButtons: any = config.radioButtons;
  configUrlButton: any = config.urlButton;


  onButtonClick(buttonState: boolean) {
    if (buttonState) {
      console.log("button clicked");
    } else {
      console.log("button unclicked");
    }
    this.boldEvent.emit(buttonState);
  }
  onRadioClick(value: string) {
    console.log(value);
  }
  onDropDownClick(value: string) {
    console.log(value);
  }
  constructor() {
  }
  ngOnInit() {
  }
}
