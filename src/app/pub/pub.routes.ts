import { RouterConfig } from '@angular/router';
import { PubListComponent } from './list/list.component';

const routes: RouterConfig = [
  {
    path: 'results',
    component: PubListComponent
  },
];

export const PUB_ROUTER_PROVIDERS = routes;
