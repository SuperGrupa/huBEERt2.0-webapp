import { Event } from '../../pub/model/event';
import { Pub }   from '../../pub/model/pub';

export class Notification {
  id: number;
  event: Event;
  pub: Pub.Subscription;
  read: boolean;
}
