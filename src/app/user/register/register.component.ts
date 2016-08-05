import { Component, OnDestroy } from '@angular/core';
import { Router }               from '@angular/router';
import { NgForm }               from '@angular/forms';

import { User } from '../model/user';
import { AuthService } from '../auth/auth.service';
import { EmailValidator } from '../../common/validators/email.validator';

@Component({
  selector: 'user-register',
  template: require('./register.component.html'),
  styles: [require('./register.component.scss')],
  directives: [EmailValidator],
})

export class UserRegisterComponent implements OnDestroy {
  subscription: any;
  error_messages = {};
  register_user = new User.Registering;
  registered: boolean = !false;

  constructor(private authService: AuthService,
              private router: Router) { }

  onSubmit() {
    this.subscription = this.authService.register(this.register_user).subscribe(
      user  => {
        this.authService.setLoggedUser(user);
        this.registered = true;
        setTimeout(() => this.router.navigate(['/search']), 5000);
      },
      error => this.error_messages = <any>error
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
