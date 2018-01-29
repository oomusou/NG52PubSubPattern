import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClockBroker } from './broker/clock.broker';
import { Clock1sPublisher } from './publisher/clock1s/clock1s.publisher';
import { DigitalClock1sComponent } from './component/digital-clock1s/digital-clock1s.component';
import { DigitalClock3sComponent } from './component/digital-clock3s/digital-clock3s.component';
import { Clock3sPublisher } from './publisher/clock3s/clock3s.publisher';
import { BrokerInterfaceToken } from './interface/injection.token';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClock1sComponent,
    DigitalClock3sComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: BrokerInterfaceToken, useClass: ClockBroker },
    Clock1sPublisher,
    Clock3sPublisher
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
