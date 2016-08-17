import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';

import { Pub }            from '../../../pub/model/pub';
import { City }           from '../../../search/model/city';
import { CityService }    from '../../../search/service/city.service';
import { PubService }     from '../../../pub/pub.service';
import { EmailValidator } from '../../../common/validators/email.validator';

@Component({
  selector: 'admin-pubs-new',
  template: require('./new.component.html'),
  styles: [require('./new.component.scss')],
  directives: [
    EmailValidator,
  ],
  providers: [CityService],
})

export class AdminPubsNewComponent implements OnInit {
  pub = new Pub.Detail();
  cities: City[] = [];

  constructor(private cityService: CityService,
              private pubService: PubService,
              private location: Location) { }

  ngOnInit() {
    this.cityService.getCities().subscribe(
      cities => {
        this.cities = cities;
        this.pub.city.id = this.cities[0].id;
      }
    );
  }

  onSubmit() {
    this.pubService.create(this.pub).subscribe(
      _ => this.goBack()
    );
  }

  goBack() {
    this.location.back();
  }
}
