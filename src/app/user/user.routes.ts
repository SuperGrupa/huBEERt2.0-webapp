import { RouterConfig } from '@angular/router';
import { UserRegisterComponent } from './register/register.component';

const routes: RouterConfig = [
  {
    path: 'register',
    component: UserRegisterComponent
  },
];

export const USER_ROUTER_PROVIDERS = routes;
