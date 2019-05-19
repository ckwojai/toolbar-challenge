import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Output() dropDownEvent = new EventEmitter<string>();
  @Input() config: any;
  onClick(value: string) {
    this.dropDownEvent.emit(value);
  }
  constructor() { }
  ngOnInit() {
  }

}
