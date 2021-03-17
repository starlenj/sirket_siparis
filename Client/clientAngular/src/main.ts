import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BaseInjector } from './app/core/injector/base-injector';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then((moduleRef) => {
  console.log("App called...")
  BaseInjector.setInjector(moduleRef.injector);
})

  .catch(err => console.error(err));
