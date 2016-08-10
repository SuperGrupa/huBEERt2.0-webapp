import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

import { UserService }    from '../../../user.service';

@Component({
  selector: 'user-remove-account',
  template: require('./remove.component.html'),
  styles: [require('./remove.component.scss')],
})

export class UserSettingsRemoveAccountComponent {
  @Input() user_id: number;

  error_messages = {};
  confirmation_needed: boolean = false;
  remove_success: boolean = false;

  constructor(private userService: UserService) { }

  onRemoveAccountClick() {
    this.confirmation_needed = true;
  }

  onConfirmationClick() {
    this.userService.delete(this.user_id).subscribe(
      user => {
        console.log(user);
      },
      errors => this.error_messages = errors
    );
  }
}
