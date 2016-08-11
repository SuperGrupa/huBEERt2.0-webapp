import { Injectable }                              from '@angular/core';
import { Http, Response, Headers }                 from '@angular/http';
import { Observable }                              from 'rxjs/Observable';

import { AuthService }                             from './auth/auth.service';
import { User }                                    from './model/user';
import { Comment }                                 from '../pub/model/comment';
import { Subscription }                            from './model/subscription';
import { Notification }                            from './model/notification';
import Url                                         from 'urls';

@Injectable()
export class UserService {
  constructor (private http: Http,
               private authService: AuthService) { }

  getGeneralInfo(): Observable<User.General> {
    let user_id = this.authService.loggedUser().id;
    return this.http.get(Url.users.one(user_id), this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  getComments(): Observable<Comment[]> {
    let user_id = this.authService.loggedUser().id;
    return this.http.get(Url.users.comments(user_id), this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  getSubscriptions(): Observable<Subscription[]> {
    let user_id = this.authService.loggedUser().id;
    return this.http.get(Url.users.subscriptions(user_id), this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  getNotifications(): Observable<Notification.Detail[]> {
    let user_id = this.authService.loggedUser().id;
    return this.http.get(Url.users.notifications.all(user_id), this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  update(user: User.General): Observable<User.General> {
    return this.http.put(Url.users.one(user.id), new User.Updating(user), this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  delete(user_id: number): Observable<User.General> {
    return this.http.delete(Url.users.one(user_id), this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }
}
