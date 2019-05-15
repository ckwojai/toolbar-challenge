import { Component, OnInit } from '@angular/core';
import * as config from './toolbar_config.json';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  dropdown_config: any = config.dropdown;
  constructor() {
  }

  ngOnInit() {
    console.log(this.dropdown_config.selectors[1].text);
  }

}
