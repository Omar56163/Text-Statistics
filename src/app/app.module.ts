import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextStatisticsComponent } from './text-statistics/text-statistics.component';
import { ShowButtonComponent } from './Common-Components/show-button/show-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TextStatisticsComponent,
    ShowButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
