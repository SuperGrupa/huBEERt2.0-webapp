import { Component } from '@angular/core';

import { AdminPubsComponent } from './pubs/pubs.component';

@Component({
  selector: 'admin',
  template: require('./admin.component.html'),
  styles: [require('./admin.component.scss')],
  directives: [
    AdminPubsComponent,
  ],
})

export class AdminComponent {
  section: string = 'pubs';

  show(what: string) {
    this.section = what;
  }
}
