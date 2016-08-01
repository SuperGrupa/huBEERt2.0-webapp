import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pub } from '../model/pub';
import { PubService } from '../pub.service';

@Component({
  selector: 'pub-show',
  template: require('./show.component.html'),
  styles: [require('./show.component.scss')],
  providers: [PubService],
})

export class PubShowComponent implements OnInit, OnDestroy {
  // pub = {
  //   rating: 3.8,
  //   name: "U Szwagra",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget facilisis libero. Phasellus ac arcu felis. Vivamus vel vehicula massa, eget facilisis mi. Suspendisse elit magna, suscipit ut ultrices quis, gravida eu ligula. Morbi nibh lectus, suscipit in egestas ut, ultricies eu diam. Sed cursus ante eu pharetra elementum. Donec nec eros vel lacus porttitor eleifend. Nulla facilisi. Nam vitae bibendum est, eu bibendum leo. Sed quis est maximus, maximus massa rutrum, blandit nulla. Donec porta vestibulum turpis et tempus. Praesent ultrices rutrum odio a mollis.",
  //   address: "Poznań ul. Żydowska 55",
  //   email: "pub@szwagier.pl",
  //   phone: 123456789
  // };
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
