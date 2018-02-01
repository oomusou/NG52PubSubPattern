import { Injectable } from '@angular/core';
import { Clock1sPublisher } from '../publisher/clock1s/clock1s.publisher';
import { BrokerInterface } from '../interface/broker.interface';
import { SubscriberInterface } from '../interface/subscriber.interface';
import { Clock3sPublisher } from '../publisher/clock3s/clock3s.publisher';
import { SubjectEnum } from '../enum/subject.enum';
import { SubjectSubscriber } from '../model/subject-subscriber.model';
import * as _ from 'lodash';

@Injectable()
export class ClockBroker implements BrokerInterface {
  private subscribers: SubjectSubscriber[] = [];
  private counter = 0;
  private maxCounter = 3;

  constructor(private clock1sPublisher: Clock1sPublisher,
              private clock3sPublisher: Clock3sPublisher) {
    this.clock1sPublisher.setBroker(this);
    this.clock3sPublisher.setBroker(this);
  }

  publish(date: Date): void {
    if (this.counter === this.maxCounter) {
      this.publishToClock3sSubscriber(date);
      this.counter = 0;

      return;
    }

    this.publishToClock1sSubscriber(date);
    this.counter++;
  }

  subscribe(subject: SubjectEnum, subscriber: SubscriberInterface): void {
    const subjectSubscriber: SubjectSubscriber = {
      subject: subject,
      subscriber: subscriber
    };
    this.subscribers.push(subjectSubscriber);
  }

  unsubscribe(subject: SubjectEnum, subscriber: SubscriberInterface): void {
    const subjectSubscriber: SubjectSubscriber = {
      subject: subject,
      subscriber: subscriber
    };

    _.remove(this.subscribers, subjectSubscriber);
  }

  private publishToClock3sSubscriber(date: Date) {
    this.subscribers
      .filter(item => item.subject === SubjectEnum.Clock3s)
      .forEach(item => item.subscriber.update(date));
  }

  private publishToClock1sSubscriber(date: Date) {
    this.subscribers
      .filter(item => item.subject === SubjectEnum.Clock1s)
      .forEach(item => item.subscriber.update(date));
  }
}
