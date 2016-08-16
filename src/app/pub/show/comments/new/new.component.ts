import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES }                              from '@angular/router';

import { AuthService } from '../../../../user/auth/auth.service';
import { PubService }  from '../../../pub.service';
import { Comment }     from '../../../model/comment';

@Component({
  selector: 'pub-comment-new',
  template: require('./new.component.html'),
  styles: [require('./new.component.scss')],
  directives: [ROUTER_DIRECTIVES],
})

export class PubCommentNewComponent implements OnInit {
  @Input() pub_id: number;
  @Output() on_new_comment = new EventEmitter();
  comment: Comment.New;
  user_id: number;
  error_messages = {};

  constructor(private authService: AuthService,
              private pubService: PubService) { }

  ngOnInit() {
    let user = this.authService.loggedUser();
    if (!user) {
      return;
    }
    this.user_id = user.id;
    this.comment = new Comment.New(this.user_id, this.pub_id);
  }

  addComment() {
    this.pubService.addComment(this.comment).subscribe(
      comment => {
        this.comment = new Comment.New(this.user_id, this.pub_id);
        this.on_new_comment.next(this.comment);
      },
      errors => this.error_messages = errors
    );
  }

  onRatingChanged(new_rating: number) {
    this.comment.rating = new_rating;
  }
}
