import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pub }            from './model/pub';
import { Comment }        from './model/comment';
import { Offer }          from './model/offer';
import { Event }          from './model/event';
import { Observable }     from 'rxjs/Observable';
import { AuthService }    from '../user/auth/auth.service';
import Url from 'urls';

@Injectable()
export class PubService {
  constructor (private authService: AuthService,
               private http: Http) { }

  getPubs(page: number, filter: string = '', city: string = ''): Observable<Pub.List> {
    return this.http.get(Url.pubs.all(page, filter, city))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPub(id: number): Observable<Pub.Detail> {
    return this.http.get(Url.pubs.one(id))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getComments(pub_id: number): Observable<Comment.General[]> {
    return this.http.get(Url.pubs.comments.all(pub_id))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getOffer(pub_id: number): Observable<Offer[]> {
    return this.http.get(Url.pubs.offer.all(pub_id))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getEvents(pub_id: number): Observable<Event[]> {
    return this.http.get(Url.pubs.events.all(pub_id))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addComment(comment: Comment.New): Observable<Comment.New> {
    return this.http.post(Url.pubs.comments.all(comment.pub_id), comment, this.authService.authorizingOptions())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  update(pub: Pub.Detail): Observable<Pub.Detail> {
    return this.http.put(Url.pubs.one(pub.id),
                        { name: pub.name, description: pub.description, phone: pub.phone, email: pub.email, city_id: pub.city.id, address: pub.address }
                        , this.authService.authorizingOptions())
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
    return Observable.throw(error.json());
  }
}
