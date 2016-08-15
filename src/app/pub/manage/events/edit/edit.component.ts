import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location }               from '@angular/common';

import { Event }                 from '../../../model/event';
import { FullDate }              from './full-date';
import { EventService }          from '../service/event.service';
import { AuthService }           from '../../../../user/auth/auth.service';

@Component({
  selector: 'pub-manage-events-edit',
  template: require('./edit.component.html'),
  styles: [require('./edit.component.scss')],
  providers: [EventService],
})

export class PubManageEventsEditComponent implements OnInit {
  event: Event;
  pub_id: number;
  error_messages = {};
  date: FullDate;

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
        
        this.eventService.get(this.pub_id, params['event_id']).subscribe(
          event => {
            this.event = event;
            this.date = new FullDate(new Date(this.event.date));
          }
        );
      }
    );
  }

  onSubmit() {
    this.event.date = this.date.toString();
    this.eventService.update(this.pub_id, this.event).subscribe(
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
