import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { PubService } from '../../pub.service';
import { Offer } from '../../model/offer';
import { Pagination } from '../../../common/pagination/pagination.component';

@Component({
  selector: 'pub-show-offer',
  template: require('./offer.component.html'),
  styles: [require('./offer.component.scss')],
  directives: [
    Pagination,
    ROUTER_DIRECTIVES
  ],
})

export class PubShowOfferComponent {
  @Input() offers: Offer[] = [];
  @Input() full_options: boolean = false;
  @Output() on_delete = new EventEmitter();

  error_message: string;
  current_page: number = 1;

  PAGE_SIZE = 10;

  constructor(private pubService: PubService,
              private router: Router) { }

  pageChanged(page) {
    this.current_page = page;
  }

  showBeerDetails(beer_id: number) {
    this.router.navigate(['/beer', beer_id]);
  }

  onDelete(offer_id: number) {
    this.on_delete.next(offer_id);
  }
}
