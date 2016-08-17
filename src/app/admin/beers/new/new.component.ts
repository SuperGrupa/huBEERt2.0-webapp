import { Component } from '@angular/core';
import { Location }  from '@angular/common';

import { Beer }        from '../../../beer/model/beer';
import { BeerService } from '../../../beer/beer.service';

@Component({
  selector: 'admin-beer-new',
  template: require('./new.component.html'),
  styles: [require('./new.component.scss')],
})

export class AdminBeersNewComponent {
  beer = new Beer.Detail();
  error_messages = {};

  constructor(private beerService: BeerService,
              private location: Location) { }

  onSubmit() {
    this.beerService.create(this.beer).subscribe(
      _ => this.goBack(),
      errors => this.error_messages = errors
    );
  }

  goBack() {
    this.location.back();
  }
}
