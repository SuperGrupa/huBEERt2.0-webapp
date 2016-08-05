import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { PubService } from '../../pub.service';
import { Event } from '../../model/event';

@Component({
  selector: 'pub-show-events',
  template: require('./events.component.html'),
  styles: [require('./events.component.scss')],
})

export class PubShowEventsComponent implements OnInit {
  @Input() pub_id: number;
  events: Event[] = [];
  error_message: string;

  constructor(private pubService: PubService) { }

  ngOnInit() {
    this.getPubEvents();
  }

  getPubEvents() {
    this.pubService.getEvents(this.pub_id).subscribe(
      data =>
        this.events = data.sort((e1, e2) => {
          if (e1.date > e2.date) return 1
          else return -1;
        })
      ,
      error => this.error_message = <any>error
    );
  }
}
