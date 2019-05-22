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
    // console.log(this.bold);
    // console.log(this.italicized);
  }
  onItalicizedEvent(italicized: boolean) {
    console.log("inside italicizedEvent handler");
    this.italicized = italicized;
  }

  title = 'toolbar-challenge';
}
