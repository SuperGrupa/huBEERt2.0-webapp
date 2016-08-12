import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService }              from '../../user/auth/auth.service';
import { UserService }              from '../../user/user.service';
import { Pub }                      from '../model/pub';
import { PubService }               from '../pub.service';
import { PubShowCommentsComponent } from './comments/comments.component';
import { PubShowOfferComponent }    from './offer/offer.component';
import { PubShowEventsComponent }   from './events/events.component';

@Component({
  selector: 'pub-show',
  template: require('./show.component.html'),
  styles: [require('./show.component.scss')],
  directives: [
    PubShowCommentsComponent,
    PubShowOfferComponent,
    PubShowEventsComponent,
  ],
})

export class PubShowComponent implements OnInit, OnDestroy {
  error_message: string;
  pub: Pub.Detail;
  is_subscribed: boolean = false;
  section: string = 'offer';
  subscription: any;

  constructor(private authService: AuthService,
              private userService: UserService,
              private pubService: PubService,
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
      data => {
        this.pub = data;
        if (this.loggedUser()) {
          this.checkIsSubscribed();
        }
      },
      error => this.error_message = <any>error
    );
  }

  loggedUser() {
    return this.authService.loggedUser();
  }

  checkIsSubscribed() {
    this.userService.getSubscriptions().subscribe(
      subs => this.is_subscribed = (subs.find(sub => sub.pub.id === this.pub.id) !== undefined)
    );
  }

  subscribe() {
    this.userService.subscribe(this.pub.id).subscribe(
      _ => this.is_subscribed = true
    );
  }

  onNewComment(comments_number: number) {
    this.pub.comments = comments_number;
  }
}
