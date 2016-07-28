import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'search',
  styles: [require('./search.component.scss')],
  template: require('./search.component.html'),
  directives: [ROUTER_DIRECTIVES],
})

export class SearchComponent {
  query: String = "";

  constructor (private router: Router) { }

  search() {
    this.router.navigate(['/results', { page: 1, q: this.query }]);
  }
}
