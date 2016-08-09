import { Injectable }                              from '@angular/core';
import { Http, Response, Headers }                 from '@angular/http';
import { Observable }                              from 'rxjs/Observable';

import { AuthService }                             from './auth/auth.service';
import { Notification }                            from './model/notification';
import Url from 'urls';

@Injectable()
export class NotificationService {
  constructor (private http: Http,
               private authService: AuthService) { }

  markAsRead(notification: Notification): Observable<Notification> {
    //let user_id = this.authService.loggedUser().id;
    let user_id = 1;
    return this.http.put(Url.users.notifications.one(user_id, notification.id), notification/*, this.authService.authorizingOptions()*/)
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }
}
