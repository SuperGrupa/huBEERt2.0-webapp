import { RouterConfig } from '@angular/router';

import { UserRegisterComponent } from './register/register.component';
import { UserLoginComponent }    from './login/login.component';
import { UserHomeComponent }     from './home/home.component';

const routes: RouterConfig = [
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'home',
    component: UserHomeComponent
  }
];

export const USER_ROUTER_PROVIDERS = routes;
