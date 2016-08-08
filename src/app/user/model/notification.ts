import { Event } from '../../pub/model/event';
import { Pub }   from '../../pub/model/pub';

export class Notification {
  event: Event;
  pub: Pub.Subscription;
}
