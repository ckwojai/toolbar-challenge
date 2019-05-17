import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.css']
})
export class StateButtonComponent implements OnInit {
  state: boolean = true;
  @Output() clicked = new EventEmitter<boolean>();
  onSelect(): void {
    console.log(this.state);
    this.clicked.emit(!this.state);
  }
  constructor() { }

  ngOnInit() {
  }

}
