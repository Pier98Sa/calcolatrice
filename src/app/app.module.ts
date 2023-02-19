import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    CalcolatriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
