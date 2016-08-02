import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PubService } from '../../pub.service';
import { Event } from '../../model/event';

@Component({
  selector: 'pub-show-events',
  template: require('./events.component.html'),
  styles: [require('./events.component.scss')],
  providers: [PubService],
})

export class PubShowEventsComponent implements OnInit {
  @Input() pub_id: number;
  events: Event.General[] = [];
  error_message: string;

  constructor(private pubService: PubService,
              private router: Router) { }

  ngOnInit() {
    this.getPubEvents();
  }

  showEventDetails(event_id: number) {
    this.router.navigate(['/pub', this.pub_id, '/event', event_id]);
  }

  getPubEvents() {
    this.pubService.getEvents(this.pub_id).subscribe(
      data => this.events = data,
      error => this.error_message = <any>error
    );
  }
}
