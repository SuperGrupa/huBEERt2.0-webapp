import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { PubService } from '../../pub.service';
import { Comment } from '../../model/comment';
import { Pagination } from '../../../common/pagination/pagination.component';

@Component({
  selector: 'pub-show-comments',
  template: require('./comments.component.html'),
  styles: [require('./comments.component.scss')],
  directives: [Pagination],
})

export class PubShowCommentsComponent implements OnInit {
  @Input() pub_id: number;
  comments: Comment[] = [];
  active_comments: Comment[] = [];
  error_message: string;
  current_page: number = 1;

  PAGE_SIZE = 10;

  constructor(private pubService: PubService) { }

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
      },
      error => this.error_message = <any>error
    );
  }
}
