import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Pub }                        from '../model/pub';
import { AuthService }                from '../../user/auth/auth.service';
import { PubService }                 from '../pub.service';
import { PubManageOffersComponent }   from './offers/offers.component';
import { PubManageEventsComponent }   from './events/events.component';
import { PubManageMainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'pub-manage',
  template: require('./manage.component.html'),
  styles: [require('./manage.component.scss')],
  directives: [
    PubManageOffersComponent,
    PubManageEventsComponent,
    PubManageMainPageComponent,
  ],
})

export class PubManageComponent implements OnInit {
  section: string = 'offers';
  pub: Pub.General;

  constructor(private pubService: PubService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    // TODO przywrócić kontrolę
    // let pub_id = this.authService.ownerPubId();
    // if (!pub_id) {
    //   this.router.navigate(['/login']);
    //   return;
    // }
    let pub_id = 1;
    this.pubService.getPub(pub_id).subscribe(
      pub => this.pub = pub
    );
  }

  show(what: string) {
    this.section = what;
  }
}
