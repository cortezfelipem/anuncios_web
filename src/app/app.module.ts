import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StructuralModule } from './components/structural/structural.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StructuralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
