import { RouterConfig } from '@angular/router';

import { AdminComponent }          from './admin.component';
import { AdminPubsNewComponent }   from './pubs/new/new.component';
import { AdminBeersNewComponent }  from './beers/new/new.component';
import { AdminBeersEditComponent } from './beers/edit/edit.component';

const routes: RouterConfig = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/pubs/new',
    component: AdminPubsNewComponent
  },
  {
    path: 'admin/beers/new',
    component: AdminBeersNewComponent
  },
  {
    path: 'admin/beer/:beer_id/edit',
    component: AdminBeersEditComponent
  },
];

export const ADMIN_ROUTER_PROVIDERS = routes;
