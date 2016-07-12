import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';

const routes: RouterConfig = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '',
    redirectTo: '/search'
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
