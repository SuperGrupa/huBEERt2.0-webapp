import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { PubService } from '../../pub.service';
import { Offer } from '../../model/offer';
import { Pagination } from '../../../common/pagination/pagination.component';

@Component({
  selector: 'pub-show-offer',
  template: require('./offer.component.html'),
  styles: [require('./offer.component.scss')],
  providers: [PubService],
  directives: [Pagination],
})

export class PubShowOfferComponent implements OnInit {
  @Input() pub_id: number;
  offer: Offer[] = [];
  active_offer: Offer[] = [];
  error_message: string;
  current_page: number = 1;

  PAGE_SIZE = 10;

  constructor(private pubService: PubService) { }

  ngOnInit() {
    this.getPubOffer();
  }

  pageChanged(page) {
    this.current_page = page;
    let begin = (this.current_page - 1)*this.PAGE_SIZE;
    this.active_offer = this.offer.slice(begin, begin + this.PAGE_SIZE);
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
