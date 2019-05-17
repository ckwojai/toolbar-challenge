import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bold: boolean;
  onBoldEvent(bold: boolean) {
    this.bold = bold;
  }
  title = 'toolbar-challenge';
}
