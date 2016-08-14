import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';

import { Beer }         from '../../../../beer/model/beer';
import { Offer }        from '../../../model/offer';
import { OfferService } from '../service/offer.service';
import { BeerService }  from '../../../../beer/beer.service';

@Component({
  selector: 'pub-manage-offers-new',
  template: require('./new.component.html'),
})

export class PubManageOffersNewComponent implements OnInit {
  pub_id: number;
  offer = new Offer();
  beers: Beer.General[] = [];
  error_messages = {};

  constructor(private beerService: BeerService,
              private offerService: OfferService,
              private location: Location) { }

  ngOnInit() {
    // TODO właściwy pub_id
    this.pub_id = 1;

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
