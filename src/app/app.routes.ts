import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';

import { SEARCH_ROUTER_PROVIDERS } from './search/search.routes';
import { PUB_ROUTER_PROVIDERS    } from './pub/pub.routes';
import { BEER_ROUTER_PROVIDERS    } from './beer/beer.routes';

const routes: RouterConfig = [
  ...BEER_ROUTER_PROVIDERS,
  ...PUB_ROUTER_PROVIDERS,
  ...SEARCH_ROUTER_PROVIDERS,
  {
    path: '',
    redirectTo: '/search'
  }
];

export const ROUTER_PROVIDERS = [
  provideRouter(routes)
];
