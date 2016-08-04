import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'user-login',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')],
  providers: [UserService],
})

export class UserLoginComponent {
  login_user = new User.Registering;

  onSubmit() {

  }
}
