import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import 'assets/img/logo.png';
import { User } from '../../user/model/user';
import { AuthService } from '../../user/auth/auth.service';

@Component({
  selector: 'app-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
  providers: [AuthService],
  directives: [ROUTER_DIRECTIVES],
})

export class HeaderComponent implements OnInit {
  logged_user: User.Logged;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    $('.navbar-collapse a').click(() => {
      $('.navbar-collapse').collapse('hide');
    });

    this.logged_user = this.authService.loggedUser();
  }
}
