import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Event }          from '../../../model/event';
import { Observable }     from 'rxjs/Observable';
import { AuthService }    from '../../../../user/auth/auth.service';
import Url from 'urls';

@Injectable()
export class EventService {
  constructor (private authService: AuthService,
               private http: Http) { }

  get(pub_id, event_id): Observable<Event> {
    return this.http.get(Url.pubs.events.one(pub_id, event_id)/*, this.authService.authorizingOptions()*/)
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  create(pub_id, event: Event): Observable<Event> {
    return this.http.post(Url.pubs.events.all(pub_id), event/*, this.authService.authorizingOptions()*/)
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }

  update(pub_id, event: Event): Observable<Event> {
    return this.http.put(Url.pubs.events.one(pub_id, event.id), event/*, this.authService.authorizingOptions()*/)
                    .map((res) => res.json() || { })
                    .catch((error) => Observable.throw(error.json()));
  }
}
