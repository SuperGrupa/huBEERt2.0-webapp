import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import 'assets/img/beer.jpg';

@Component({
  selector: 'search',
  styles: [require('./search.component.scss')],
  template: require('./search.component.html'),
  directives: [ROUTER_DIRECTIVES],
})

export class SearchComponent { }
