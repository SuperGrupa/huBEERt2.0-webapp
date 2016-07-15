import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import 'assets/img/logo.png';

@Component({
  selector: 'app-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
  directives: [ROUTER_DIRECTIVES],
})

export class HeaderComponent { }
