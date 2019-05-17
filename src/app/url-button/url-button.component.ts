import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-url-button',
  templateUrl: './url-button.component.html',
  styleUrls: ['./url-button.component.css']
})
export class UrlButtonComponent implements OnInit {
  @Input() config: any = { "title": "Link", "url": "https://google.com/" };

  constructor() { }

  ngOnInit() {
  }

}
