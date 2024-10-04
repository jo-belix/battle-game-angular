import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IPlayerDataProvider, Player } from '@battle/domain';
import { PlayerHttpClient } from '@battle/http-client';
import { PlayerMapper } from '../mappers/player-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataProvider implements IPlayerDataProvider {

  // Injects
  private readonly playerHttpClient: PlayerHttpClient = inject(PlayerHttpClient);
  private readonly playerMapper: PlayerMapper = inject(PlayerMapper);

  // Signals
  public players: WritableSignal<Player[]> = signal<Player[]>([]);

  /**
   * @description Load players
   */
  public loadPlayers(): void {
    this.playerHttpClient.getPlayers()
      .subscribe((players) => {
        this.players.set(this.playerMapper.mapFromGetPlayerResponses(players));
      });
  }

}
