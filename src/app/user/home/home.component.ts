import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }                       from '@angular/router';
import { Subscription }                 from 'rxjs/Subscription';

import { User }                           from '../model/user';
import { AuthService }                    from '../auth/auth.service';
import { UserService }                    from '../user.service';
import { UserHomeCommentsComponent }      from './comments/comments.component';
import { UserHomeSubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UserHomeNotificationsComponent } from './notifications/notifications.component';
import { UserHomeSettingsComponent }      from './settings/settings.component';

@Component({
  selector: 'user-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')],
  directives: [
    UserHomeCommentsComponent,
    UserHomeSubscriptionsComponent,
    UserHomeNotificationsComponent,
    UserHomeSettingsComponent,
  ],
  providers: [UserService],
})

export class UserHomeComponent implements OnInit, OnDestroy {
  section = "notifications";
  user: User.General;
  error_messages = {};
  subscription: Subscription;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    if (this.authService.loggedUser()) {
      this.subscription = this.userService.getGeneralInfo().subscribe(
        user => this.user = user,
        error => this.error_messages = error
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  routerOnActivate() {
    console.log('routerOnActivate');
  }

  show(what) {
    this.section = what;
  }

  decNotifications(unread_notifications: number) {
    this.user.notifications = unread_notifications;
  }
}
