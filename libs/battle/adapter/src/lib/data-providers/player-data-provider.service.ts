import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IPlayerDataProvider, Player } from '@battle/domain';
import { PlayerHttpClient, PostPlayerRequest } from '@battle/http-client';
import { PlayerMapper } from '../mappers/player-mapper.service';

@Injectable()
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
    if (this.players().length === 0) {
      this.playerHttpClient.getPlayers()
        .subscribe((players) => {
          this.players.set(this.playerMapper.mapFromGetPlayerResponses(players));
        });
    }
  }

  /**
   * @description Add a player
   * @param name 
   */
  public addPlayer(name: string): void {
    this.playerHttpClient.postPlayer(new PostPlayerRequest(name))
      .subscribe((player) => {
        this.players.set([...this.players(), this.playerMapper.mapFromPostPlayerResponse(player)]);
      });
  }

}
