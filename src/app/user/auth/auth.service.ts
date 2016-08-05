import { Injectable }                              from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User }                                    from '../model/user';
import { Observable }                              from 'rxjs/Observable';

import Url from 'urls';

@Injectable()
export class AuthService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  private logged_user: User.Logged;

  constructor (private http: Http) { }

  register(user: User.Registering): Observable<User.Logged> {
    return this.http.post(Url.users.all(), JSON.stringify(user), this.options)
                    .map(this.extractData)
                    .map(this.setLoggedUser)
                    .catch(this.handleError);
  }

  loggedUser(): User.Logged {
    return this.logged_user;
  }

  private setLoggedUser(user) {
    this.logged_user = user;
  }

  private extractData(res: Response) {
    let body = res.json() || { };
    return body;
  }

  private handleError (error: any) {
    return Observable.throw(error.json());
  }
}
