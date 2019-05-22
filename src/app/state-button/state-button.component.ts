import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.css']
})
export class StateButtonComponent implements OnInit {
  @Input() config: any;
  @Output() onClickEvent = new EventEmitter<boolean>();
  state: boolean = false;
  onSelect(): void {
    this.onClickEvent.emit(!this.state);
  }
  constructor() { }

  ngOnInit() {
  }

}
