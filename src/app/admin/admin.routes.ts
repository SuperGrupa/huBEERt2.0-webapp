import { RouterConfig } from '@angular/router';

import { AdminComponent }        from './admin.component';
import { AdminPubsNewComponent } from './pubs/new/new.component';

const routes: RouterConfig = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/pubs/new',
    component: AdminPubsNewComponent
  },
];

export const ADMIN_ROUTER_PROVIDERS = routes;
