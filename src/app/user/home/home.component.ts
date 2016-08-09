import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                 from 'rxjs/Subscription';

import { User }                           from '../model/user';
import { AuthService }                    from '../auth/auth.service';
import { UserService }                    from '../user.service';
import { UserHomeCommentsComponent }      from './comments/comments.component';
import { UserHomeSubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UserHomeNotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'user-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')],
  directives: [
    UserHomeCommentsComponent,
    UserHomeSubscriptionsComponent,
    UserHomeNotificationsComponent,
  ],
  providers: [UserService],
})

export class UserHomeComponent implements OnInit, OnDestroy {
  section = "notifications";
  user: User.General;
  error_messages = {};
  subscription: Subscription;

  constructor(private authService: AuthService,
              private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.getGeneralInfo().subscribe(
      user => this.user = user,
      error => this.error_messages = error
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  show(what) {
    this.section = what;
  }

  decNotifications(unread_notifications: number) {
    this.user.notifications = unread_notifications;
  }
}
