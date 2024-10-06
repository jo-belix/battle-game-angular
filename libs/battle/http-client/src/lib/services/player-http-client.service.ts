import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigManager } from '@jbx/config';
import { catchError, Observable } from 'rxjs';
import { PostPlayerResponse } from '../models/player/post-player-response.model';
import { PostPlayerRequest } from '../models/player/post-player-request.model';
import { GetPlayerResponse } from '../models/player/get-player-response.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerHttpClient {

  // Constantes
  private readonly CONTROLLER_NAME : string = 'players';
  private readonly VERSION : string= 'v1';

  // Injects
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly configManagerService: ConfigManager = inject(ConfigManager);

  /**
   * @description Returns all Players
   * @returns Observable<GetPlayerResponse[]>
   */
  public getPlayers(): Observable<GetPlayerResponse[]> {
    return this.httpClient.get<GetPlayerResponse[]>(`${this.configManagerService.getApiUrl(this.CONTROLLER_NAME,this.VERSION)}`)
      .pipe(
        catchError((error) => {
          console.error(error)
          return [];
        })
      );
  }

  /**
   * @description Posts a Player
   * @returns Observable<PostPlayerResponse>
   */
  public postPlayer( postPlayerRequest : PostPlayerRequest ): Observable<PostPlayerResponse> {
    return this.httpClient.post<PostPlayerResponse>(`${this.configManagerService.getApiUrl(this.CONTROLLER_NAME,this.VERSION)}`, postPlayerRequest)
      .pipe(
        catchError((error) => {
          console.error(error)
          return [];
        })
      );
  }

}
