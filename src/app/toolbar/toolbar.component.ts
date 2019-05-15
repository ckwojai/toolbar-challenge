import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  selectors: string[] = ['Test1', 'Test2', 'Test2']

  constructor() { }

  ngOnInit() {
  }

}
