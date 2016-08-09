import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Notification }        from '../../model/notification';
import { Subscription }        from '../../model/subscription';
import { UserService }         from '../../user.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'user-notifications',
  template: require('./notifications.component.html'),
  styles: [require('./notifications.component.scss')],
  providers: [NotificationService],
})

export class UserHomeNotificationsComponent implements OnInit, OnDestroy {
  @Input() notifis_number: number;

  error_message = {};
  notifications: Notification[] = [];
  sub: any;

  constructor(private userService: UserService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.sub = this.userService.getNotifications().subscribe(
      notifis => this.notifications = notifis,
      error => this.error_message = <any>error
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  markAsRead() {
    console.log('ok');
  }
}
