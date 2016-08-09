import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';

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
  @Output() on_read_notification = new EventEmitter();

  error_message = {};
  notifications: Notification.Detail[] = [];
  read_notifications: number = 0;
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

  markAsRead(not_id: number) {
    this.notificationService.markAsRead(not_id).subscribe(
      notify => {
        this.notifications.find(n => n.id === not_id).read = true;
        this.on_read_notification.next(this.notifis_number - 1);
      },
      error => this.error_message = <any>error
    );
  }
}
