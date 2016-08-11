import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import Url from 'urls';

import { Beer } from './model/beer';

@Injectable()
export class BeerService {
  constructor (private http: Http) { }

  getBeer(id: number): Observable<Beer.Detail> {
    return this.http.get(Url.beers.one(id))
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
