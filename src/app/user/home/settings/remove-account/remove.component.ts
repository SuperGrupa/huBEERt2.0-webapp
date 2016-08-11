import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

import { AuthService } from '../../../auth/auth.service';
import { UserService } from '../../../user.service';

@Component({
  selector: 'user-remove-account',
  template: require('./remove.component.html'),
  styles: [require('./remove.component.scss')],
})

export class UserSettingsRemoveAccountComponent {
  @Input() user_id: number;

  error_messages = {};
  remove_success: boolean = false;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  onConfirmationClick() {
    this.userService.delete(this.user_id).subscribe(
      user => {
        this.remove_success = true;
        this.authService.setLoggedUser(null);
        setTimeout(() => {
          this.router.navigate(['/search']);
          $('#confirm').modal('toggle');
        }, 3000);
      },
      errors => this.error_messages = errors
    );
  }
}
