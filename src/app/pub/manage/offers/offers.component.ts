import { Component, OnInit, Input } from '@angular/core';

import { Offer }                 from '../../model/offer';
import { PubService }            from '../../pub.service';
import { PubShowOfferComponent } from '../../show/offer/offer.component';

@Component({
  selector: 'pub-manage-offers',
  template: require('./offers.component.html'),
  styles: [require('./offers.component.scss')],
  directives: [PubShowOfferComponent],
})

export class PubManageOffersComponent implements OnInit {
  @Input() pub_id: number;
  offers: Offer[] = [];
  received: boolean = false;

  constructor(private pubService: PubService) { }

  ngOnInit() {
    // TODO pobieranie właściwego id pubu
    this.pubService.getOffer(1).subscribe(
      offers => {
        this.offers = offers;
        this.received = true;
      }
    );
  }

  onDelete(offer_id: number) {
    
  }
}
