import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { SubjectEnum } from '../../enum/subject.enum';
import { SubscriberInterface } from '../../interface/subscriber.interface';
import { BrokerInterfaceToken } from '../../interface/injection.token';
import { BrokerInterface } from '../../interface/broker.interface';

@Component({
  selector: 'app-digital-clock3s',
  templateUrl: './digital-clock3s.component.html',
  styleUrls: ['./digital-clock3s.component.css']
})
export class DigitalClock3sComponent implements SubscriberInterface, OnInit, OnDestroy {
  now: Date = new Date();

  constructor(
    @Inject(BrokerInterfaceToken)
    private clockBroker: BrokerInterface) {
  }

  ngOnInit(): void {
    this.clockBroker.subscribe(SubjectEnum.Clock3s, this);
  }

  ngOnDestroy(): void {
    this.clockBroker.unsubscribe(SubjectEnum.Clock3s, this);
  }

  update(date: Date): void {
    this.now = date;
  }
}
