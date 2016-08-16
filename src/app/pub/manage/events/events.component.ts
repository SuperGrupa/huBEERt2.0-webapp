import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES }        from '@angular/router';

import { Event }                  from '../../model/event';
import { PubShowEventsComponent } from '../../show/events/events.component';
import { PubService }             from '../../pub.service';

@Component({
  selector: 'pub-manage-events',
  template: require('./events.component.html'),
  styles: [require('./events.component.scss')],
  directives: [
    ROUTER_DIRECTIVES,
    PubShowEventsComponent,
  ],
})

export class PubManageEventsComponent implements OnInit {
  @Input() pub_id: number;
  events: Event[] = [];

  constructor(private pubService: PubService) { }

  ngOnInit() {
    this.pubService.getEvents(this.pub_id).subscribe(
      events => this.events = events
    );
  }
}
