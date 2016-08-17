import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AuthService }    from '../user/auth/auth.service';
import Url from 'urls';

import { Beer } from './model/beer';

@Injectable()
export class BeerService {
  constructor (private authService: AuthService,
               private http: Http) { }

  getAll(): Observable<Beer.General[]> {
    return this.http.get(Url.beers.all())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getBeer(id: number): Observable<Beer.Detail> {
    return this.http.get(Url.beers.one(id))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  create(beer: Beer.Detail): Observable<Beer.Detail> {
    return this.http.post(Url.beers.all(), beer, this.authService.authorizingOptions())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  update(beer: Beer.Detail): Observable<Beer.Detail> {
    return this.http.put(Url.beers.one(beer.id), beer, this.authService.authorizingOptions())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
