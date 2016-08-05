import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { User } from '../model/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'user-login',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')],
})

export class UserLoginComponent {
  login_user = new User.Registering;

  onSubmit() {

  }
}
