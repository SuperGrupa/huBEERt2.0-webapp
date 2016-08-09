import { Event } from '../../pub/model/event';
import { Pub }   from '../../pub/model/pub';

export namespace Notification {

  export class Detail {
    id: number;
    event: Event;
    pub: Pub.Subscription;
    read: boolean;
  }

  export class Update {
    public read: boolean;

    constructor(config) {
      this.read = config.read || false;
    }
  }

}
