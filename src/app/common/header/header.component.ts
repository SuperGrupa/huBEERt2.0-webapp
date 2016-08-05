import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
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
  logged_user: User.Logged;
  subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    $('.navbar-collapse a').click(() => {
      $('.navbar-collapse').collapse('hide');
    });

    this.subscription = this.authService.user_item.subscribe(
      user => this.logged_user = user
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
