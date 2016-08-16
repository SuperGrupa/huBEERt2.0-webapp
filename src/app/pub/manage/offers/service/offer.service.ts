import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Offer }          from '../../../model/offer';
import { Observable }     from 'rxjs/Observable';
import { AuthService }    from '../../../../user/auth/auth.service';
import Url from 'urls';

@Injectable()
export class OfferService {
  constructor (private authService: AuthService,
               private http: Http) { }

  get(pub_id, offer_id): Observable<Offer> {
    let user_id = this.authService.loggedUser().id;
    return this.http.get(Url.pubs.offer.one(pub_id, offer_id), this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  create(pub_id, offer): Observable<Offer> {
    let user_id = this.authService.loggedUser().id;
    return this.http.post(Url.pubs.offer.all(pub_id),
                          { pub_id, value: offer.value, beer_id: offer.beer.id }, this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  update(pub_id, offer): Observable<Offer> {
    let user_id = this.authService.loggedUser().id;
    return this.http.put(Url.pubs.offer.one(pub_id, offer.id), offer, this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  delete(pub_id, offer_id): Observable<Offer> {
    let user_id = this.authService.loggedUser().id;
    return this.http.delete(Url.pubs.offer.one(pub_id, offer_id), this.authService.authorizingOptions())
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }
}
