import { RouterConfig }       from '@angular/router';
import { PubListComponent }   from './list/list.component';
import { PubShowComponent }   from './show/show.component';
import { PubManageComponent } from './manage/manage.component';
import { PubManageOffersEditComponent } from './manage/offers/edit/edit.component';
import { PubManageOffersNewComponent  } from './manage/offers/new/new.component';
import { PubManageEventsEditComponent } from './manage/events/edit/edit.component';

const routes: RouterConfig = [
  {
    path: 'results',
    component: PubListComponent
  },
  {
    path: 'pub/:id',
    component: PubShowComponent
  },
  {
    path: 'manage',
    component: PubManageComponent
  },
  {
    path: 'manage/offer/new',
    component: PubManageOffersNewComponent
  },
  {
    path: 'manage/offer/:offer_id/edit',
    component: PubManageOffersEditComponent
  },
  {
    path: 'manage/event/:event_id/edit',
    component: PubManageEventsEditComponent
  },
];

export const PUB_ROUTER_PROVIDERS = routes;
