import { Component, OnInit } from '@angular/core';

import { Pub }                      from '../model/pub';
import { PubService }               from '../pub.service';
import { PubManageOffersComponent } from './offers/offers.component';

@Component({
  selector: 'pub-manage',
  template: require('./manage.component.html'),
  styles: [require('./manage.component.scss')],
  directives: [
    PubManageOffersComponent
  ],
})

export class PubManageComponent implements OnInit {
  section: string = 'offers';
  pub: Pub.General;

  constructor(private pubService: PubService) { }

  ngOnInit() {
    // TODO pobieranie właściwego id pubu
    this.pubService.getPub(1).subscribe(
      pub => this.pub = pub
    );
  }

  show(what: string) {
    this.section = what;
  }
}
