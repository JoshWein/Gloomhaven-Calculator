import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIModule } from './ui-modules/ui.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckReliabilityComponent } from './deck-reliability/deck-reliability.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckReliabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
