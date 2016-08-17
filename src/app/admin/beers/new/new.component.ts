import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Location }          from '@angular/common';

import { AuthService } from '../../../user/auth/auth.service';
import { Beer }        from '../../../beer/model/beer';
import { BeerService } from '../../../beer/beer.service';

@Component({
  selector: 'admin-beer-new',
  template: require('./new.component.html'),
  styles: [require('./new.component.scss')],
})

export class AdminBeersNewComponent implements OnInit {
  beer = new Beer.Detail();
  error_messages = {};

  constructor(private beerService: BeerService,
              private authService: AuthService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    let user = this.authService.loggedUser();
    if (!user || user.role !== 'admin') {
      this.router.navigate(['/search']);
    }
  }

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
