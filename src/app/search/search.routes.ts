import { RouterConfig } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: RouterConfig = [
  {
    path: 'search',
    component: SearchComponent
  },
];

export const SEARCH_ROUTER_PROVIDERS = routes;
