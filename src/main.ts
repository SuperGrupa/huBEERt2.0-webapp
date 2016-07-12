import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import './assets/img/favicon.png?output=favicon.png';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

console.info('app.environment:', app.environment);
if (app.environment === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
]);
