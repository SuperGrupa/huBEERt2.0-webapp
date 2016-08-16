import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location }               from '@angular/common';

import { Event }                 from '../../../model/event';
import { FullDate }              from '../model/full-date';
import { EventService }          from '../service/event.service';
import { AuthService }           from '../../../../user/auth/auth.service';

@Component({
  selector: 'pub-manage-events-new',
  template: require('./new.component.html'),
  styles: [require('./new.component.scss')],
  providers: [EventService],
})

export class PubManageEventsNewComponent implements OnInit {
  event: Event;
  pub_id: number;
  error_messages = {};
  date: FullDate = new FullDate(new Date());

  constructor(private authService: AuthService,
              private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.pub_id = this.authService.ownerPubId();
        if (!this.pub_id) {
          this.router.navigate(['/login']);
          return;
        }
        this.event = new Event();
      }
    );
  }

  onSubmit() {
    this.event.date = this.date.toString();
    this.eventService.create(this.pub_id, this.event).subscribe(
      _ => this.location.back(),
      errors => this.error_messages = errors
    );
  }

  goBack() {
    this.location.back();
  }

  range(start: number, end: number) {
    return Array.apply(null, {length: end - start + 1}).map((_, index) => index + start);
  }
}
