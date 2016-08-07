import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                        from 'rxjs/Subscription';

import { Comment }     from '../../../pub/model/comment';
import { UserService } from '../../user.service';
import { User }        from '../../model/user';
import { Pagination }  from '../../../common/pagination/pagination.component';

@Component({
  selector: 'user-comments',
  template: require('./comments.component.html'),
  directives: [Pagination],
})

export class UserHomeCommentsComponent implements OnInit, OnDestroy {
  @Input() comments_number: number;

  error_message = {};
  comments: Comment[] = [];
  active_comments: Comment[] = [];
  current_page: number;
  subscription: Subscription;

  PAGE_SIZE = 10;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.getComments().subscribe(
      comments => {
        this.comments = comments.sort((c1, c2) => {
          if (c1.date > c2.date) return -1
          else return 1;
        });
        this.pageChanged(1);
      },
      error => this.error_message = <any>error
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  pageChanged(page: number) {
    this.current_page = page;
    let begin = (this.current_page - 1)*this.PAGE_SIZE;
    this.active_comments = this.comments.slice(begin, begin + this.PAGE_SIZE);
  }
}
