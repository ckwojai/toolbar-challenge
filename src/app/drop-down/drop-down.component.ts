import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Input() selectors: { text: string, callback: string }[];
  constructor() { }

  ngOnInit() {
  }

}
