import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { AuthService } from '../../../user/auth/auth.service';
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
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    let user = this.authService.loggedUser();
    if (!user || user.role !== 'admin') {
      this.router.navigate(['/search']);
    }

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
