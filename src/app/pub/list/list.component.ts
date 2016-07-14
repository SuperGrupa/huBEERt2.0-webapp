import { Component, OnInit } from '@angular/core';
import { Pub } from '../pub';
import { PubService } from '../pub.service';

@Component({
  selector: 'pub-list',
  template: require('./list.component.html'),
  providers: [PubService],
})

export class PubListComponent implements OnInit {
  errorMessage: string;
  pubs: Pub[];

  constructor (private pubService: PubService) { }

  ngOnInit() {
    this.getPubs();
  }

  getPubs() {
    this.pubService.getPubs()
                     .subscribe(
                       pubs => this.pubs = pubs,
                       error => this.errorMessage = <any>error);
  }

  // addHero (name: string) {
  //   if (!name) { return; }
  //   this.heroService.addHero(name)
  //                    .subscribe(
  //                      hero  => this.heroes.push(hero),
  //                      error =>  this.errorMessage = <any>error);
  // }
}
