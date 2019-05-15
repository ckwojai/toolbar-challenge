import { Component, OnInit } from '@angular/core';
import * as config from './toolbar_config.json';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  // selectors: string[] = ['Test1', 'Test2', 'Test2']
  dropdown_selectors: { text: string, callback: string }[] = config.dropdown.selectors
  constructor() { }

  ngOnInit() {
    console.log(config.dropdown.selectors[1].text)
  }

}
