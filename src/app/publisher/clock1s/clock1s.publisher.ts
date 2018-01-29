import { Injectable } from '@angular/core';
import { PublisherInterface } from '../../interface/publisher.interface';
import { BrokerInterface } from '../../interface/broker.interface';

@Injectable()
export class Clock1sPublisher implements PublisherInterface {
  private interval = 1000;
  private clockBroker: BrokerInterface;

  constructor() {
    setInterval(() => this.tick(), this.interval);
  }

  setBroker(broker: BrokerInterface): void {
    this.clockBroker = broker;
  }

  private tick(): void {
    this.clockBroker.publish(new Date());
  }
}
