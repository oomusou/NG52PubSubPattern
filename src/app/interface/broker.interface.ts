import { SubjectEnum } from '../enum/subject.enum';
import { SubscriberInterface } from './subscriber.interface';

export interface BrokerInterface {
  publish(date: Date): void;
  subscribe(subject: SubjectEnum, subscriber: SubscriberInterface): void;
  unsubscribe(subject: SubjectEnum, subscriber: SubscriberInterface): void;
}
