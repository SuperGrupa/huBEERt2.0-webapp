import { Component, Input, OnInit } from '@angular/core';

import { AuthService }    from '../../auth/auth.service';
import { User }           from '../../model/user';
import { UserService }    from '../../user.service';
import { City }           from '../../../search/model/city';
import { CityService }    from '../../../search/service/city.service';
import { EmailValidator } from '../../../common/validators/email.validator';

import { UserSettingsRemoveAccountComponent } from './remove-account/remove.component';

@Component({
  selector: 'user-settings',
  template: require('./settings.component.html'),
  styles: [require('./settings.component.scss')],
  directives: [
    EmailValidator,
    UserSettingsRemoveAccountComponent,
  ],
  providers: [CityService],
})

export class UserHomeSettingsComponent {
  @Input() user: User.General;

  error_messages = {};
  cities: City[] = [];
  update_success: boolean = false;

  constructor(private authService: AuthService,
              private userService: UserService,
              private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities().subscribe(
      cities => this.cities = cities,
      errors => this.error_messages = errors
    );
  }

  onSubmit() {
    this.userService.update(this.user).subscribe(
      user => {
        this.user = user;
        this.authService.changeLogin(this.user.login);
        this.error_messages = {};
        this.update_success = true;
        setTimeout(() => this.update_success = false, 3000);
      },
      errors => this.error_messages = errors
    );
  }
}
