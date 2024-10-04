/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Config, ConfigManager, loadConfig } from '@jbx/config';

loadConfig().then((config : Config) => {
platformBrowserDynamic([{ provide: ConfigManager.ConfigInjectionToken, useValue: config }]);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
});
