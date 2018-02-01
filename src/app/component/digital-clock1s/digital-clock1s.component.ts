import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { SubscriberInterface } from '../../interface/subscriber.interface';
import { SubjectEnum } from '../../enum/subject.enum';
import { BrokerInterface } from '../../interface/broker.interface';
import { BrokerInterfaceToken } from '../../interface/injection.token';

@Component({
  selector: 'app-digital-clock1s',
  templateUrl: './digital-clock1s.component.html',
  styleUrls: ['./digital-clock1s.component.css']
})
export class DigitalClock1sComponent implements SubscriberInterface, OnInit, OnDestroy {
  now: Date = new Date();

  constructor(
    @Inject(BrokerInterfaceToken)
    private clockBroker: BrokerInterface) {
  }

  ngOnInit(): void {
    this.clockBroker.subscribe(SubjectEnum.Clock1s, this);
  }

  ngOnDestroy(): void {
    this.clockBroker.unsubscribe(SubjectEnum.Clock1s, this);
  }

  update(date: Date): void {
    this.now = date;
  }

  onStopClick() {
    this.clockBroker.unsubscribe(SubjectEnum.Clock1s, this);
  }
}
