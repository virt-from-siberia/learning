import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CookpitComponent } from './cookpit/cookpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CookpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
