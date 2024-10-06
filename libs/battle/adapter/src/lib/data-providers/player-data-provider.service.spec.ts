import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlayerDataProvider } from './player-data-provider.service';
import { PlayerHttpClient, PostPlayerRequest } from '@battle/http-client';
import { PlayerMapper } from '../mappers/player-mapper.service';
import { Player } from '@battle/domain';

describe('PlayerDataProvider', () => {
  let service: PlayerDataProvider;
  let playerHttpClientSpy: jasmine.SpyObj<PlayerHttpClient>;
  let playerMapperSpy: jasmine.SpyObj<PlayerMapper>;

  beforeEach(() => {
    const playerHttpClientMock = jasmine.createSpyObj('PlayerHttpClient', ['getPlayers', 'postPlayer']);
    const playerMapperMock = jasmine.createSpyObj('PlayerMapper', ['mapFromGetPlayerResponses', 'mapFromPostPlayerResponse']);

    TestBed.configureTestingModule({
      providers: [
        PlayerDataProvider,
        { provide: PlayerHttpClient, useValue: playerHttpClientMock },
        { provide: PlayerMapper, useValue: playerMapperMock }
      ]
    });

    service = TestBed.inject(PlayerDataProvider);
    playerHttpClientSpy = TestBed.inject(PlayerHttpClient) as jasmine.SpyObj<PlayerHttpClient>;
    playerMapperSpy = TestBed.inject(PlayerMapper) as jasmine.SpyObj<PlayerMapper>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load players if not already loaded', () => {
    // Arrange
    const mockPlayers = [{ id: 1, name: 'Player1' }];
    const mappedPlayers = [{ id: 1, name: 'Player1' } as Player];

    playerHttpClientSpy.getPlayers.and.returnValue(of(mockPlayers));
    playerMapperSpy.mapFromGetPlayerResponses.and.returnValue(mappedPlayers);

    // Act
    service.loadPlayers();

    // Assert
    expect(playerHttpClientSpy.getPlayers).toHaveBeenCalled();
    expect(playerMapperSpy.mapFromGetPlayerResponses).toHaveBeenCalledWith(mockPlayers);
    expect(service.players()).toEqual(mappedPlayers);
  });

  it('should add a player', () => {
    // Arrange
    const playerName = 'New Player';
    const mockPlayerResponse = { id: 2, name: playerName };
    const mappedPlayer = { id: 2, name: playerName } as Player;

    playerHttpClientSpy.postPlayer.and.returnValue(of(mockPlayerResponse));
    playerMapperSpy.mapFromPostPlayerResponse.and.returnValue(mappedPlayer);

    // Act
    service.addPlayer(playerName);

    // Assert
    expect(playerHttpClientSpy.postPlayer).toHaveBeenCalledWith(new PostPlayerRequest(playerName));
    expect(playerMapperSpy.mapFromPostPlayerResponse).toHaveBeenCalledWith(mockPlayerResponse);
    expect(service.players()).toContain(mappedPlayer);
  });
});