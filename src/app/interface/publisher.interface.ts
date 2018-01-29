import { BrokerInterface } from './broker.interface';

export interface PublisherInterface {
  setBroker(broker: BrokerInterface): void;
}
