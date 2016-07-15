import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pub }            from './pub';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PubService {
  private pubsUrl = 'http://localhost:3000/pubs';

  constructor (private http: Http) { }

  getPubs(filter: string): Observable<Pub[]> {
    return this.http.get(this.pubsUrl)
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
