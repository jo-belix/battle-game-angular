import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { IGameDataProvider, Game, IPlayerDataProvider } from '@battle/domain';
import { GameHttpClient, GetGameResponse, PostGameResponse } from '@battle/http-client';
import { PlayerDataProvider } from './player-data-provider.service';
import { GameMapper } from '../mappers/game-mapper.service';

/**
 * @description GameDataProvider
 */
@Injectable()
export class GameDataProvider implements IGameDataProvider {

  // Injects
  private readonly gameHttpClient: GameHttpClient = inject(GameHttpClient);
  private readonly playerDataProvider: IPlayerDataProvider = inject(IPlayerDataProvider);
  private readonly gameMapper: GameMapper = inject(GameMapper);

  // Signals
  private getGameResponses: WritableSignal<GetGameResponse[]> = signal<GetGameResponse[]>([]);
  public games: Signal<Game[]> = computed(() => {
    const games: Game[] = [];
    this.getGameResponses().forEach(getGameResponse => {
      games.push(this.gameMapper.mapFromGetGameResponse(getGameResponse, this.playerDataProvider.players()))
    });
    return games;
  });

  /**
   * @description Load gamess
   */
  public loadGames(): void {
    // We need to load the players first, to be able to map the games
    if (this.getGameResponses().length === 0) {
      this.playerDataProvider.loadPlayers();
      this.gameHttpClient.getGames()
        .subscribe((getGameResponses: GetGameResponse[]) => {
          this.getGameResponses.set(getGameResponses);
        });
    }
  }

  /**
   * @description Add a game
   * @param game 
   */
  public addGame(game: Game): void {
    const postGameRequest = this.gameMapper.mapToPostGameRequest(game);
    this.gameHttpClient.postGame(postGameRequest)
      .subscribe((postGameResponse: PostGameResponse) => {
        // We add the new game to the list of games
        this.getGameResponses.set([...this.getGameResponses(), postGameResponse]);
      });
  }
}
