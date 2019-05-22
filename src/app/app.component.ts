import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bold: boolean = false;
  public italicized: boolean = false;
  onBoldEvent(bold: boolean) {
    this.bold = bold;
  }
  onItalicizedEvent(italicized: boolean) {
    this.italicized = italicized;
  }

  title = 'toolbar-challenge';
}
