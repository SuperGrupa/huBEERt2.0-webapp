import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { NgForm }    from '@angular/forms';

import { User } from '../model/user';
import { AuthService } from '../auth/auth.service';
import { EmailValidator } from '../../common/validators/email.validator';

@Component({
  selector: 'user-register',
  template: require('./register.component.html'),
  styles: [require('./register.component.scss')],
  providers: [AuthService],
  directives: [EmailValidator],
})

export class UserRegisterComponent {
  error_messages = {};
  register_user = new User.Registering;

  constructor(private authService: AuthService,
              private router: Router) { }

  onSubmit() {
    this.authService.register(this.register_user).subscribe(
      user  => this.router.navigate(['/home']),
      error => this.error_messages = <any>error
    );
  }
}
