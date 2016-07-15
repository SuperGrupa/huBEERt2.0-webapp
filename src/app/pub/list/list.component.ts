import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pub } from '../pub';
import { PubService } from '../pub.service';

@Component({
  selector: 'pub-list',
  template: require('./list.component.html'),
  styles: [require('./list.component.scss')],
  providers: [PubService],
})

export class PubListComponent implements OnInit, OnDestroy {
  errorMessage: string;
  pubs: Pub[];
  subscription: any;

  constructor (private pubService: PubService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      let query = params['q'];
      this.getPubs(query);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToPub(id: number) {
    this.router.navigate(['/pub', id]);
  }

  getPubs(query: string) {
    this.pubService.getPubs(query)
                     .subscribe(
                       pubs => this.pubs = pubs,
                       error => this.errorMessage = <any>error);
  }
}
