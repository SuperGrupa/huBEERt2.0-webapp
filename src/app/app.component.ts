import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import './rxjs-operators';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AuthService } from './user/auth/auth.service';
import { UserService} from './user/user.service';
import { PubService } from './pub/pub.service';
import { OfferService } from './pub/manage/offers/service/offer.service';
import { BeerService } from './beer/beer.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  providers: [
    AuthService,
    UserService,
    PubService,
    OfferService,
    BeerService,
  ],
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent,
  ],
})

export class AppComponent { }
