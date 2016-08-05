import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import './rxjs-operators';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AuthService }     from './user/auth/auth.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  providers: [AuthService],
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent,
  ],
})

export class AppComponent { }
