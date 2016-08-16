import { RouterConfig } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: RouterConfig = [
  {
    path: 'admin',
    component: AdminComponent
  },
];

export const ADMIN_ROUTER_PROVIDERS = routes;
