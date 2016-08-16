import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { AuthService }            from '../../../user/auth/auth.service';
import { PubService }             from '../../pub.service';
import { Comment }                from '../../model/comment';
import { Pagination }             from '../../../common/pagination/pagination.component';
import { PubCommentNewComponent } from './new/new.component';

@Component({
  selector: 'pub-show-comments',
  template: require('./comments.component.html'),
  styles: [require('./comments.component.scss')],
  directives: [
    Pagination,
    PubCommentNewComponent
  ],
})

export class PubShowCommentsComponent implements OnInit {
  @Input() pub_id: number;
  @Input() comments_number: number;
  @Output() on_new_comment = new EventEmitter();

  comments: Comment.General[] = [];
  active_comments: Comment.General[] = [];
  error_message: string;
  current_page: number = 1;

  PAGE_SIZE = 10;

  constructor(private authService: AuthService,
              private pubService: PubService) { }

  ngOnInit() {
    this.getPubComments();
  }

  pageChanged(page) {
    this.current_page = page;
    let begin = (this.current_page - 1)*this.PAGE_SIZE;
    this.active_comments = this.comments.slice(begin, begin + this.PAGE_SIZE);
  }

  getPubComments() {
    this.pubService.getComments(this.pub_id).subscribe(
      data => {
        this.comments = data.sort((c1, c2) => {
          if (c1.date > c2.date) return -1
          else return 1;
        });
        this.pageChanged(1);
        this.comments_number = this.comments.length;
      },
      error => this.error_message = <any>error
    );
  }

  onNewComment() {
    this.on_new_comment.next(this.comments_number + 1);
    this.getPubComments();
  }
}
