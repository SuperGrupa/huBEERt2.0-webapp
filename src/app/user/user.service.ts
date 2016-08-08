import { Injectable }                              from '@angular/core';
import { Http, Response, Headers }                 from '@angular/http';
import { Observable }                              from 'rxjs/Observable';

import { AuthService }                             from './auth/auth.service';
import { User }                                    from './model/user';

import Url from 'urls';

@Injectable()
export class UserService {
  constructor (private http: Http,
               private authService: AuthService) { }

  getGeneralInfo(): Observable<User.General> {
    //let user_id = this.authService.loggedUser().id;
    let user_id = 1;
    return this.http.get(Url.users.one(user_id)/*, this.authService.authorizingOptions()*/)
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  getComments() {
    let user_id = 1;
    return this.http.get(Url.users.comments(user_id)/*, this.authService.authorizingOptions()*/)
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  getSubscriptions() {
    let user_id = 1;
    return this.http.get(Url.users.subscriptions(user_id)/*, this.authService.authorizingOptions()*/)
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  getNotifications() {
    let user_id = 1;
    return this.http.get(Url.users.notifications(user_id)/*, this.authService.authorizingOptions()*/)
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }
}
