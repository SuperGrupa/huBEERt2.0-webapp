import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Location }          from '@angular/common';

import { Beer }        from '../../../beer/model/beer';
import { BeerService } from '../../../beer/beer.service';

@Component({
  selector: 'admin-beer-edit',
  template: require('./edit.component.html'),
  styles: [require('./edit.component.scss')],
})

export class AdminBeersEditComponent implements OnInit {
  beer: Beer.Detail;
  error_messages = {};
  beer_id: number;

  constructor(private beerService: BeerService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.beer_id = +params['beer_id'];
        this.beerService.getBeer(this.beer_id).subscribe(
          beer => this.beer = beer
        );
      }
    );
  }

  onSubmit() {
    this.beerService.update(this.beer).subscribe(
      _ => this.goBack(),
      errors => this.error_messages = errors
    );
  }

  goBack() {
    this.location.back();
  }
}
