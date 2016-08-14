import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES }        from '@angular/router';

import { Offer }                 from '../../model/offer';
import { PubService }            from '../../pub.service';
import { OfferService }          from './service/offer.service';
import { PubShowOfferComponent } from '../../show/offer/offer.component';

@Component({
  selector: 'pub-manage-offers',
  template: require('./offers.component.html'),
  styles: [require('./offers.component.scss')],
  directives: [
    PubShowOfferComponent,
    ROUTER_DIRECTIVES
  ],
})

export class PubManageOffersComponent implements OnInit {
  @Input() pub_id: number;
  offers: Offer[] = [];
  deleting_offer_id: number;

  constructor(private pubService: PubService,
              private offerService: OfferService) { }

  ngOnInit() {
    this.pubService.getOffer(this.pub_id).subscribe(
      offers => this.offers = offers
    );
  }

  onDelete(offer_id: number) {
    this.deleting_offer_id = offer_id;
    $('#confirm').modal('show');
  }

  onConfirmationDelete() {
    this.offerService.delete(this.pub_id, this.deleting_offer_id).subscribe(
      deleted => {
        $('#confirm').modal('hide');
        this.offers = this.offers.filter(o => o.id != deleted.id);
      }
    );
  }
}
