import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent,
  ],
})

export class AppComponent { }
