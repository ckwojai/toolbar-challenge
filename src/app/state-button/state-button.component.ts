import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.css']
})
export class StateButtonComponent implements OnInit {
  @Input() config: any;
  @Output() clicked = new EventEmitter<boolean>();
  state: boolean = false;
  onSelect(): void {
    console.log(this.state);
    this.clicked.emit(!this.state);
  }
  constructor() { }

  ngOnInit() {
  }

}
