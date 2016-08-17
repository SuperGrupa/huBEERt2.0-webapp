import { Component } from '@angular/core';

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

export class AdminComponent {
  section: string = 'pubs';

  show(what: string) {
    this.section = what;
  }
}
