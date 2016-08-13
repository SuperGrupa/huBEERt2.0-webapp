import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';

import { Offer }                 from '../../../model/offer';
import { AuthService }           from '../../../../user/auth/auth.service';
import { OfferService }          from '../service/offer.service';

@Component({
  selector: 'pub-manage-offers-edit',
  template: require('./edit.component.html'),
  styles: [require('../../../../common/styles/main.scss')],
})

export class PubManageOffersEditComponent implements OnInit {
  offer: Offer;
  pub_id: number;
  error_messages = {};

  constructor(private authService: AuthService,
              private offerService: OfferService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        //let user = this.authService.loggedUser();
        // TODO wstawić prawidłowe id usera
        this.pub_id = 11;
        this.offerService.get(this.pub_id, params['offer_id']).subscribe(
          offer => this.offer = offer
        );
      }
    );
  }

  onSubmit() {
    this.offerService.update(this.pub_id, this.offer).subscribe(
      _ => this.location.back(),
      errors => this.error_messages = errors
    );
  }

  goBack() {
    this.location.back();
  }
}
