import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router }                              from '@angular/router';

import { Subscription } from '../../model/subscription';
import { UserService }  from '../../user.service';
import { Pagination }   from '../../../common/pagination/pagination.component';

@Component({
  selector: 'user-subscriptions',
  template: require('./subscriptions.component.html'),
  styles: [require('./subscriptions.component.scss')],
  directives: [Pagination],
})

export class UserHomeSubscriptionsComponent implements OnInit, OnDestroy {
  @Input() subs_number: number;

  error_message = {};
  subscriptions: Subscription[] = [];
  active_subscriptions: Subscription[] = [];
  current_page: number;
  sub: any;

  PAGE_SIZE = 5;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.userService.getSubscriptions().subscribe(
      subs => {
        this.subscriptions = subs;
        this.pageChanged(1);
      },
      error => this.error_message = <any>error
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToPub(pub_id: number) {
    this.router.navigate(['/pub', pub_id]);
  }

  pageChanged(page: number) {
    this.current_page = page;
    let begin = (this.current_page - 1)*this.PAGE_SIZE;
    this.active_subscriptions = this.subscriptions.slice(begin, begin + this.PAGE_SIZE);
  }
}
