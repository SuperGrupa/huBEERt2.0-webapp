import { Component, OnInit, Input } from '@angular/core';
import { Router }                   from '@angular/router';

import { Pub }            from '../../model/pub';
import { City }           from '../../../search/model/city';
import { CityService }    from '../../../search/service/city.service';
import { PubService }     from '../../pub.service';
import { AuthService }    from '../../../user/auth/auth.service';
import { EmailValidator } from '../../../common/validators/email.validator';

@Component({
  selector: 'pub-manage-main-page',
  template: require('./main-page.component.html'),
  styles: [require('./main-page.component.scss')],
  providers: [CityService],
  directives: [EmailValidator],
})

export class PubManageMainPageComponent implements OnInit {
  @Input() pub_id: number;
  pub: Pub.Detail;
  cities: City[] = [];
  error_messages = {};
  saved: boolean = false;

  constructor(private authService: AuthService,
              private pubService: PubService,
              private cityService: CityService,
              private router: Router) { }

  ngOnInit() {
    this.pub_id = this.authService.ownerPubId();
    if (!this.pub_id) {
      this.router.navigate(['/login']);
      return;
    }

    this.pubService.getPub(this.pub_id).subscribe(
      pub => this.pub = pub
    );
    this.cityService.getCities().subscribe(
      cities => this.cities = cities
    );
  }

  onSubmit() {
    this.pubService.update(this.pub).subscribe(
      _ => {
        this.saved = true;
        setTimeout(() => this.saved = false, 3000);
      },
      errors => this.error_messages = errors
    );
  }
}
