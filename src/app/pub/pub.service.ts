import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { PubList }        from './list/pub-list';
import { Observable }     from 'rxjs/Observable';
import Url from 'urls';

@Injectable()
export class PubService {
  constructor (private http: Http) { }

  getPubs(page: number, filter: string, city: number): Observable<PubList> {
    return this.http.get(Url.pubs(page, filter, city))
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
