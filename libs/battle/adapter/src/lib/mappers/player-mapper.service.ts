import { Injectable } from '@angular/core';
import { Player } from '@battle/domain';
import { GetPlayerResponse } from '@battle/http-client';

@Injectable({
  providedIn: 'root'
})
/**
 * @description Player mapper
 */
export class PlayerMapper {

  /**
   * @description Maps a player
   * @param getPlayerResponse 
   * @returns 
   */
  public mapFromGetPlayerResponse(getPlayerResponse: GetPlayerResponse): Player {
    return new Player(getPlayerResponse.id, getPlayerResponse.name);
  }

  /**
   * @description Maps a list of player
   * @param getPlayerResponses 
   * @returns 
   */
  public mapFromGetPlayerResponses(getPlayerResponses: GetPlayerResponse[]): Player[] {
    return getPlayerResponses.map((getPlayerResponse) => this.mapFromGetPlayerResponse(getPlayerResponse));
  }
 
}
