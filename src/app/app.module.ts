import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerDisplayComponent } from './ui/timer-display/timer-display.component';
import { TimeFormatPipe } from './core/pipe/time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerDisplayComponent,
    TimeFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
