import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import 'assets/css/bootstrap.min.css';
import 'assets/js/bootstrap.min.js';
import 'assets/js/jquery.min.js';
import 'assets/fonts/glyphicons-halflings-regular.ttf';
import 'assets/fonts/glyphicons-halflings-regular.woff';
import 'assets/fonts/glyphicons-halflings-regular.woff2';
import 'assets/img/beer.jpg';
import 'assets/img/favicon.png';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { ROUTER_PROVIDERS } from './app/app.routes';

console.info('app.environment:', app.environment);
if (app.environment === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
])
.catch(err => console.error(err));
