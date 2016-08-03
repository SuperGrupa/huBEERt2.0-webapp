import { RouterConfig } from '@angular/router';
import { BeerShowComponent } from './show/show.component';

const routes: RouterConfig = [
  {
    path: 'beer/:id',
    component: BeerShowComponent
  },
];

export const BEER_ROUTER_PROVIDERS = routes;
