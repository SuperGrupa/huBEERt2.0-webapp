import { RouterConfig } from '@angular/router';
import { UserRegisterComponent } from './register/register.component';
import { UserLoginComponent } from './login/login.component';

const routes: RouterConfig = [
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
];

export const USER_ROUTER_PROVIDERS = routes;
