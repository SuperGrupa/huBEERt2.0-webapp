import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PubService } from '../../pub.service';
import { Offer } from '../../model/offer';
import { Pagination } from '../../../common/pagination/pagination.component';

@Component({
  selector: 'pub-show-offer',
  template: require('./offer.component.html'),
  styles: [require('./offer.component.scss')],
  directives: [Pagination],
})

export class PubShowOfferComponent implements OnInit {
  @Input() pub_id: number;
  @Input() full_options: boolean = false;
  offer: Offer[] = [];
  active_offer: Offer[] = [];
  error_message: string;
  current_page: number = 1;

  PAGE_SIZE = 10;

  constructor(private pubService: PubService,
              private router: Router) { }

  ngOnInit() {
    this.getPubOffer();
  }

  pageChanged(page) {
    this.current_page = page;
    let begin = (this.current_page - 1)*this.PAGE_SIZE;
    this.active_offer = this.offer.slice(begin, begin + this.PAGE_SIZE);
  }

  showBeerDetails(beer_id: number) {
    this.router.navigate(['/beer', beer_id]);
  }

  getPubOffer() {
    this.pubService.getOffer(this.pub_id).subscribe(
      data => {
        this.offer = data;
        this.pageChanged(1);
      },
      error => this.error_message = <any>error
    );
  }
}
