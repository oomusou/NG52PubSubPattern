import { SubjectEnum } from '../enum/subject.enum';
import { SubscriberInterface } from '../interface/subscriber.interface';

export interface SubjectSubscriber {
  subject: SubjectEnum;
  subscriber: SubscriberInterface;
}
