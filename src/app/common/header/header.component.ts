import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import 'assets/img/logo.png';
import { User } from '../../user/model/user';
import { AuthService } from '../../user/auth/auth.service';

@Component({
  selector: 'app-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
  directives: [ROUTER_DIRECTIVES],
})

export class HeaderComponent implements OnInit, OnDestroy {
  error_messages = {};
  logged_user: User.Logged;
  login_sub: Subscription;
  logout_sub: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    $('.navbar-collapse a').click(() => {
      $('.navbar-collapse').collapse('hide');
    });

    this.login_sub = this.authService.user_item.subscribe(
      user => this.logged_user = user
    );
  }

  ngOnDestroy() {
    this.login_sub.unsubscribe();

    if (this.logout_sub) {
      this.logout_sub.unsubscribe();
    }
  }

  logout() {
    this.logout_sub = this.authService.logout().subscribe(
      _ => {
        this.authService.setLoggedUser(null);
        this.router.navigate(['/search']);
      },
      errors => this.error_messages = errors
    );
  }
}
