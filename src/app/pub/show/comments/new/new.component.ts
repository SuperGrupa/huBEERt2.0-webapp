import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../user/auth/auth.service';
import { Comment }     from '../../../model/comment';

@Component({
  selector: 'pub-comment-new',
  template: require('./new.component.html'),
  styles: [require('./new.component.scss')],
})

export class PubCommentNewComponent implements OnInit {
  comment: Comment;
  error_message: string;

  constructor(private authService: AuthService) {
    let user = this.authService.loggedUser();
    let login = user ? user.login : 'Entity303';
    this.comment = new Comment(login);
  }

  ngOnInit() {
    let self = this;
    $(':radio').change(function() {
      self.comment.rating = $(this).val();
    });
  }

  addComment() {

  }
}
