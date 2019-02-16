import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIModule } from './modules/ui-modules/ui.module';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckReliabilityComponent } from './modules/deck-reliability/deck-reliability.component';
import { CardProbabilityComponent } from './modules/card-probability/card-probability.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckReliabilityComponent,
    CardProbabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UIModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
