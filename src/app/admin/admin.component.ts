import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AuthService }         from '../user/auth/auth.service';
import { AdminPubsComponent }  from './pubs/pubs.component';
import { AdminBeersComponent } from './beers/beers.component';

@Component({
  selector: 'admin',
  template: require('./admin.component.html'),
  styles: [require('./admin.component.scss')],
  directives: [
    AdminPubsComponent,
    AdminBeersComponent,
  ],
})

export class AdminComponent implements OnInit {
  section: string = 'pubs';

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    let user = this.authService.loggedUser();
    if (!user || user.role !== 'admin') {
      this.router.navigate(['/search']);
    }
  }

  show(what: string) {
    this.section = what;
  }
}
