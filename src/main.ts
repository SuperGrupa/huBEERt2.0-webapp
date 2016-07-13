import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'assets/img/favicon.png';
import './assets/styles/main.scss';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { ROUTER_PROVIDERS } from './app/app.routes';

console.info('app.environment:', app.environment);
if (app.environment === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
]);
