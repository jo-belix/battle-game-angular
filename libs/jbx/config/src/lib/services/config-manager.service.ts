import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Config } from '../models/config.model';


/**
 * @description Token for the app config
 */
export const CONFIG = new InjectionToken<Config>('CONFIG')


@Injectable({
  providedIn: 'root'
})
/**
 * @description Config manager service
 */
export class ConfigManager {

  constructor(@Inject(CONFIG) private readonly config: Config) {
  }

  /**
   * @description Get the API URL
   * @returns string
   **/
  public getApiUrl(controllerName: string, version: string): string {
    return `${this.config.apiUrl}/${version}/${controllerName}`;
  }

  /**
   * @description Get the token
   * @returns 
   */
  public getToken(): string {
    return this.config.token;
  }

}
