import { Component } from '@angular/core';

import './../../../assets/img/logo.png?output=logo.png';

@Component({
  selector: 'app-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
})

export class HeaderComponent { }
