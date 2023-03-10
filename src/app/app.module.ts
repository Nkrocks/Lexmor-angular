import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
  ],
  declarations: [
    AppComponent,HeaderComponent
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
