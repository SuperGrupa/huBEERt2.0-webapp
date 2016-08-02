import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pub }            from './model/pub';
import { Observable }     from 'rxjs/Observable';
import Url from 'urls';

@Injectable()
export class PubService {
  constructor (private http: Http) { }

  getPubs(page: number, filter: string, city: string): Observable<Pub.List> {
    return this.http.get(Url.pubs(page, filter, city))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPub(id: number): Observable<Pub.Detail> {
    return this.http.get(Url.pub(id))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getComments(pub_id: number): Observable<Comment[]> {
    return this.http.get(Url.comments(pub_id))
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
