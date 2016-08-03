import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { Beer } from '../model/beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'beer-show',
  template: require('./show.component.html'),
  styles: [require('./show.component.scss')],
  providers: [BeerService],
  directives: [ROUTER_DIRECTIVES],
})

export class BeerShowComponent implements OnInit, OnDestroy {
  error_message: string;
  beer: Beer.Detail;
  subscription: any;

  constructor(private beerService: BeerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      let id = params['id'];
      this.getBeer(id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getBeer(id: number) {
    this.beerService.getBeer(id).subscribe(
      data => this.beer = data,
      error => this.error_message = <any>error
    );
  }
}
