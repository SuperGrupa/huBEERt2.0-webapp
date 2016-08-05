import { Injectable }                              from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User }                                    from '../model/user';
import { Observable }                              from 'rxjs/Observable';
import { BehaviorSubject }                         from 'rxjs/BehaviorSubject';

import Url from 'urls';

@Injectable()
export class AuthService {
  private logged_user_source = new BehaviorSubject<User.Logged>(null);
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private logged_user: User.Logged;

  user_item = this.logged_user_source.asObservable();

  constructor (private http: Http) { }

  register(user: User.Registering): Observable<User.Logged> {
    return this.http.post(Url.users.all(), JSON.stringify(user), this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  login(user: User.Logging): Observable<User.Logged> {
    return this.http.post(Url.tokens.all(), JSON.stringify(user), this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  setLoggedUser(user: User.Logged) {
    this.logged_user = user;
    this.logged_user_source.next(this.logged_user);
  }

  loggedUser(): User.Logged {
    return this.logged_user;
  }

  private extractData(res: Response) {
    let body = res.json() || { };
    return body;
  }

  private handleError (error: any) {
    return Observable.throw(error.json());
  }
}
