import { Component } from '@angular/core';

@Component({
  selector: 'user-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')],
})

export class UserHomeComponent {
  user = {
    subscriptions: 3,
    comments: 5,
  };
  section = "notifications";

  show(what) {
    this.section = what;
  }
}
