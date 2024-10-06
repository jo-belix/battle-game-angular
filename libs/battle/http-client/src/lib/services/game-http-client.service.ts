import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigManager } from '@jbx/config';
import { catchError, Observable } from 'rxjs';
import { GetGameResponse } from '../models/game/get-game-response.model';
import { PostGameResponse } from '../models/game/post-game-response.model';
import { PostGameRequest } from '../models/game/post-game-request.model';

@Injectable({
  providedIn: 'root'
})
export class GameHttpClient {

  // Constantes
  private readonly CONTROLLER_NAME: string = 'games';
  private readonly VERSION: string = 'v1';

  // Injects
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly configManagerService: ConfigManager = inject(ConfigManager);

  /**
   * @description Returns all games
   * @returns Observable<GetGameResponse[]>
   */
  public getGames(): Observable<GetGameResponse[]> {
    return this.httpClient.get<GetGameResponse[]>(`${this.configManagerService.getApiUrl(this.CONTROLLER_NAME, this.VERSION)}`)
      .pipe(
        catchError((error) => {
          console.error(error)
          return [];
        })
      );
  }

  /**
   * @description Posts a game
   * @returns Observable<PostGameResponse>
   */
  public postGame(postGameRequest: PostGameRequest): Observable<PostGameResponse> {
    return this.httpClient.post<PostGameResponse>(`${this.configManagerService.getApiUrl(this.CONTROLLER_NAME, this.VERSION)}`, postGameRequest.scores)
      .pipe(
        catchError((error) => {
          console.error(error)
          return [];
        })
      );
  }

}
