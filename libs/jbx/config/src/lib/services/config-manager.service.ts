import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
/**
 * @description Config manager service
 */
export class ConfigManager {

  public static readonly ConfigInjectionToken = new InjectionToken<Config>('CONFIG')

  constructor(@Inject(ConfigManager.ConfigInjectionToken) private readonly config: Config) {
  }

  /**
   * @description Get the API URL
   * @returns string
   **/
  public getApiUrl(controllerName: string, version: string): string {
    return `${this.config.apiUrl}/${version}/${controllerName}`;
  }

}
