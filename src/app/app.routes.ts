import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';

import { SEARCH_ROUTER_PROVIDERS } from './search/search.routes';

const routes: RouterConfig = [
  ...SEARCH_ROUTER_PROVIDERS,
  {
    path: '',
    redirectTo: '/search'
  }
];

export const ROUTER_PROVIDERS = [
  provideRouter(routes)
];
