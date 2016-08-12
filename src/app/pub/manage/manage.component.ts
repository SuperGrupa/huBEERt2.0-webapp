import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Pub }        from '../model/pub';
import { PubService } from '../pub.service';

@Component({
  selector: 'pub-manage',
  template: require('./manage.component.html'),
  styles: [require('./manage.component.scss')],
})

export class PubManageComponent implements OnInit {
  error_messages = {};
  section: string = 'offers';
  pub: Pub.General;

  constructor(private pubService: PubService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // TODO pobieranie właściwego id pubu
    this.pubService.getPub(1).subscribe(
      pub => this.pub = pub,
      errors => this.error_messages = errors
    );
  }

  show(what: string) {
    this.section = what;
  }
}
