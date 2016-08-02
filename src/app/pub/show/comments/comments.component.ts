import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { PubService } from '../../pub.service';

@Component({
  selector: 'pub-show-comments',
  template: require('./comments.component.html'),
  styles: [require('./comments.component.scss')],
  providers: [PubService],
})

export class PubShowCommentsComponent implements OnInit {
  @Input() pub_id: number;
  comments: Comment[];
  error_message: string;

  constructor(private pubService: PubService) { }

  ngOnInit() {
    this.getPubComments();
  }

  getPubComments() {
    this.pubService.getComments(this.pub_id).subscribe(
      data => this.comments = data,
      error => this.error_message = <any>error
    );
  }
}
