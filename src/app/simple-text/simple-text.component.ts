import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.css']
})
export class SimpleTextComponent implements OnInit {
  @Input() bold: boolean = false;
  @Input() italicized: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
