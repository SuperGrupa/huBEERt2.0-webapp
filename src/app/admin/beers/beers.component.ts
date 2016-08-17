import { Component, OnInit }         from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Beer }        from '../../beer/model/beer';
import { BeerService } from '../../beer/beer.service';
import { Pagination }  from '../../common/pagination/pagination.component';

@Component({
  selector: 'admin-beers',
  template: require('./beers.component.html'),
  styles: [require('./beers.component.scss')],
  directives: [
    Pagination,
    ROUTER_DIRECTIVES,
  ],
})

export class AdminBeersComponent implements OnInit {
  PAGE_SIZE = 30;

  beers: Beer.General[] = [];
  active_beers: Beer.General[] = [];
  current_page: number = 1;

  constructor(private beerService: BeerService,
              private router: Router) { }

  ngOnInit() {
    this.beerService.getAll().subscribe(
      beers => {
        this.beers = beers;
        this.pageChanged(1);
      }
    );
  }

  pageChanged(page: number) {
    this.current_page = page;
    let begin = (this.current_page - 1)*this.PAGE_SIZE;
    this.active_beers = this.beers.slice(begin, begin + this.PAGE_SIZE);
  }

  goToBeer(beer_id: number) {
    this.router.navigate(['/beer', beer_id]);
  }
}
