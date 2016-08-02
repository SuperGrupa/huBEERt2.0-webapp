import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pub } from '../model/pub';
import { PubService } from '../pub.service';
import { Pagination } from '../../common/pagination/pagination.component';

@Component({
  selector: 'pub-list',
  template: require('./list.component.html'),
  styles: [require('./list.component.scss')],
  directives: [Pagination],
  providers: [PubService],
})

export class PubListComponent implements OnInit, OnDestroy {
  error_message: string;
  pubs: Pub.General[];
  total_pubs: number;
  current_page: number = 1;
  query: string;
  city: string;
  subscription: any;

  constructor (private pubService: PubService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.query = params['q'];
      this.current_page = +params['page'];
      this.city = params['city'];
      this.getPubs();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToPub(id: number) {
    this.router.navigate(['/pub', id]);
  }

  pageChanged(page_number: number) {
    this.router.navigate(['/results', { city: this.city, page: page_number, q: this.query }]);
  }

  getPubs() {
    this.pubService.getPubs(this.current_page, this.query, this.city).subscribe(
      data => {
        this.pubs = data.pubs;
        this.total_pubs = data.total_pubs;
      },
      error => this.error_message = <any>error
    );
  }
}
