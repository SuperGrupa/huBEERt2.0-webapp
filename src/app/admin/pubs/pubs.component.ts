import { Component, OnInit }         from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService } from '../../user/auth/auth.service';
import { Pub }         from '../../pub/model/pub';
import { PubService }  from '../../pub/pub.service';
import { Pagination }  from '../../common/pagination/pagination.component';

@Component({
  selector: 'admin-pubs',
  template: require('./pubs.component.html'),
  styles: [require('./pubs.component.scss')],
  directives: [
    Pagination,
    ROUTER_DIRECTIVES,
  ],
})

export class AdminPubsComponent implements OnInit {
  pubs: Pub.General[] = [];
  total_pubs: number = 0;
  current_page: number = 1;
  deleting_pub: number;

  constructor(private pubService: PubService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    let user = this.authService.loggedUser();
    if (!user || user.role !== 'admin') {
      this.router.navigate(['/search']);
    }

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
