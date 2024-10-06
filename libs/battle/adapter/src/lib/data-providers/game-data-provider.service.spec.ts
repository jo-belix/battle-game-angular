import { TestBed } from '@angular/core/testing';
import { GameDataProvider } from './game-data-provider.service';
import { GameHttpClient, GetGameResponse, PostGameResponse } from '@battle/http-client';
import { PlayerDataProvider } from './player-data-provider.service';
import { GameMapper } from '../mappers/game-mapper.service';
import { of } from 'rxjs';
import { Game, IPlayerDataProvider } from '@battle/domain';
import { provideHttpClient } from '@angular/common/http';

describe('GameDataProvider', () => {
  let service: GameDataProvider;
  let gameHttpClientSpy: jasmine.SpyObj<GameHttpClient>;
  let playerDataProviderSpy: jasmine.SpyObj<PlayerDataProvider>;
  let gameMapperSpy: jasmine.SpyObj<GameMapper>;

  beforeEach(() => {
    const gameHttpClientSpyObj = jasmine.createSpyObj('GameHttpClient', ['getGames', 'postGame']);
    const playerDataProviderSpyObj = jasmine.createSpyObj('PlayerDataProvider', ['loadPlayers', 'players']);
    const gameMapperSpyObj = jasmine.createSpyObj('GameMapper', ['mapFromGetGameResponse', 'mapToPostGameRequest']);

    TestBed.configureTestingModule({
      providers: [
        GameDataProvider,
        { provide: GameHttpClient, useValue: gameHttpClientSpyObj },
        { provide: IPlayerDataProvider, useValue: playerDataProviderSpyObj },
        { provide: GameMapper, useValue: gameMapperSpyObj }
      ]
    });

    service = TestBed.inject(GameDataProvider);
    gameHttpClientSpy = TestBed.inject(GameHttpClient) as jasmine.SpyObj<GameHttpClient>;
    playerDataProviderSpy = TestBed.inject(IPlayerDataProvider) as jasmine.SpyObj<PlayerDataProvider>;
    gameMapperSpy = TestBed.inject(GameMapper) as jasmine.SpyObj<GameMapper>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load games', () => {
    // Arrange
    const mockGetGameResponses: GetGameResponse[] = [{ id: 1, scores: [{ playerId: 1, score: 14 }, { playerId: 2, score: 12 }] }, { id: 2, scores: [{ playerId: 1, score: 10 }, { playerId: 2, score: 16 }] }];
    gameHttpClientSpy.getGames.and.returnValue(of(mockGetGameResponses));
    playerDataProviderSpy.players.and.returnValue([]);

    // Act
    service.loadGames();

    // Assert
    expect(playerDataProviderSpy.loadPlayers).toHaveBeenCalled();
    expect(gameHttpClientSpy.getGames).toHaveBeenCalled();
    expect(service['getGameResponses']()).toEqual(mockGetGameResponses);
  });

  it('should add a game', () => {

    // Arrange
    const mockGame: Game = { id: 1, scores: [{ player: { id: 1, name: "Player 1" }, score: 14 }, { player: { id: 2, name: "Player 2" }, score: 12 }] };
    const mockPostGameResponse: PostGameResponse = { id: 1, scores: [{ playerId: 1, score: 14 }, { playerId: 2, score: 12 }] };
    gameMapperSpy.mapToPostGameRequest.and.returnValue({ /* mock request */ });
    gameHttpClientSpy.postGame.and.returnValue(of(mockPostGameResponse));

    // Act
    service.addGame(mockGame);

    // Assert
    expect(gameMapperSpy.mapToPostGameRequest).toHaveBeenCalledWith(mockGame);
    expect(gameHttpClientSpy.postGame).toHaveBeenCalled();
    expect(service['getGameResponses']()).toContain(mockPostGameResponse);
  });
});