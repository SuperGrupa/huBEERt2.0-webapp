import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pub } from '../model/pub';
import { PubService } from '../pub.service';
import { PubShowCommentsComponent } from './comments/comments.component';
import { PubShowOfferComponent } from './offer/offer.component';

@Component({
  selector: 'pub-show',
  template: require('./show.component.html'),
  styles: [require('./show.component.scss')],
  providers: [PubService],
  directives: [PubShowCommentsComponent, PubShowOfferComponent],
})

export class PubShowComponent implements OnInit, OnDestroy {
  error_message: string;
  pub: Pub.Detail;
  section: string = 'offer';
  subscription: any;

  constructor(private pubService: PubService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      let id = params['id'];
      this.getPub(id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  show(what: string) {
    this.section = what;
  }

  getPub(id: number) {
    this.pubService.getPub(id).subscribe(
      data => this.pub = data,
      error => this.error_message = <any>error
    );
  }

  currentUser() {
    return {name: 'QbekKawy'};
  }
}
