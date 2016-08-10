import { Component, OnDestroy } from '@angular/core';
import { Router }               from '@angular/router';
import { NgForm }               from '@angular/forms';

import { User } from '../model/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'user-login',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')],
})

export class UserLoginComponent implements OnDestroy {
  login_user = new User.Registering;
  logged: boolean = false;
  subscription: any;
  error_messages = {};

  constructor(private authService: AuthService,
              private router: Router) { }

  onSubmit() {
    this.subscription = this.authService.login(this.login_user).subscribe(
      user => {
        this.authService.setLoggedUser(user);
        this.logged = true;
        setTimeout(() => this.router.navigate(['/home']), 2000);
      },
      errors => this.error_messages = errors
    );
  }

  ngOnDestroy() {
    // jeśli dokonano próby logowania
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
