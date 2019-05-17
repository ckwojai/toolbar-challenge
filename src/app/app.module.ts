import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './drop-down/drop-down.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StateButtonComponent } from './state-button/state-button.component';

import { FormsModule } from '@angular/forms';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { UrlButtonComponent } from './url-button/url-button.component';
import { SimpleTextComponent } from './simple-text/simple-text.component'; // <-- NgModel lives here

export class YourAppModule {
}
@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    ToolbarComponent,
    StateButtonComponent,
    RadioButtonsComponent,
    UrlButtonComponent,
    SimpleTextComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
