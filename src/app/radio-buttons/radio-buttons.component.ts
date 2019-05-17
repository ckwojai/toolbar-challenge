import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css']
})
export class RadioButtonsComponent implements OnInit {
  @Input() config: any;
  @Output() clicked = new EventEmitter<string>();
  model: any;
  onClick(value: string): void {
    this.clicked.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
