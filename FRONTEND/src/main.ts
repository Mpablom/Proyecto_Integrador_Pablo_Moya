import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';

import { environment } from './environments/environment.prod';

import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';

const app = initializeApp(environment.firebaseConfig);

export function initApp(http: HttpClient) {
  return () => http.get(environment.apiURL + '/persona/traer/perfil').toPromise();
}

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic([
  {
    provide: APP_INITIALIZER,
    useFactory: initApp,
    deps: [HttpClient],
    multi: true,
  },
]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
