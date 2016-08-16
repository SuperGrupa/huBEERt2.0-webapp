import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Location }          from '@angular/common';

import { Beer }         from '../../../../beer/model/beer';
import { Offer }        from '../../../model/offer';
import { AuthService }  from '../../../../user/auth/auth.service';
import { OfferService } from '../service/offer.service';
import { BeerService }  from '../../../../beer/beer.service';

@Component({
  selector: 'pub-manage-offers-new',
  template: require('./new.component.html'),
  styles: [require('../../../../common/styles/main.scss')],
})

export class PubManageOffersNewComponent implements OnInit {
  pub_id: number;
  offer = new Offer();
  beers: Beer.General[] = [];
  error_messages = {};

  constructor(private beerService: BeerService,
              private offerService: OfferService,
              private authService: AuthService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.pub_id = this.authService.ownerPubId();
    if (!this.pub_id) {
      this.router.navigate(['/login']);
      return;
    }

    this.beerService.getAll().subscribe(
      beers => {
        this.beers = beers;
        this.offer.beer.id = this.beers[0].id;
      }
    );
  }

  onSubmit() {
    this.offerService.create(this.pub_id, this.offer).subscribe(
      _ => this.goBack(),
      errors => this.error_messages = errors
    );
  }

  goBack() {
    this.location.back();
  }
}
