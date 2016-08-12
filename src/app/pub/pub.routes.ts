import { RouterConfig }       from '@angular/router';
import { PubListComponent }   from './list/list.component';
import { PubShowComponent }   from './show/show.component';
import { PubManageComponent } from './manage/manage.component';

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
];

export const PUB_ROUTER_PROVIDERS = routes;
