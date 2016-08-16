import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Pub }        from '../../pub/model/pub';
import { PubService } from '../../pub/pub.service';
import { Pagination } from '../../common/pagination/pagination.component';

@Component({
  selector: 'admin-pubs',
  template: require('./pubs.component.html'),
  styles: [require('./pubs.component.scss')],
  directives: [
    Pagination,
  ],
})

export class AdminPubsComponent implements OnInit {
  pubs: Pub.General[] = [];
  total_pubs: number = 0;
  current_page: number = 1;
  deleting_pub: number;

  constructor(private pubService: PubService,
              private router: Router) { }

  ngOnInit() {
    this.getPubs();
  }

  pageChanged(page: number) {
    this.current_page = page;
    this.getPubs();
  }

  getPubs() {
    this.pubService.getPubs(this.current_page).subscribe(
      data => {
        this.pubs = data.pubs;
        this.total_pubs = data.total_pubs;
      }
    );
  }

  goToPub(pub_id: number) {
    this.router.navigate(['/pub', pub_id]);
  }

  onDeleteClick(pub_id: number) {
    this.deleting_pub = pub_id;
  }

  onConfirmationDelete() {
    this.pubService.delete(this.deleting_pub).subscribe(
      _ => {
        $('#confirm').modal('toggle');
        this.pubs = this.pubs.filter(pub => pub.id !== this.deleting_pub);
      }
    );
  }
}
