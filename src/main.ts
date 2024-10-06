/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CONFIG, Config, loadConfig } from '@jbx/config';

loadConfig().then((config : Config) => {
platformBrowserDynamic([{ provide: CONFIG, useValue: config }]);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
});
