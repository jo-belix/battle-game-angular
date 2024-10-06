import { TestBed } from '@angular/core/testing';
import { PlayerManager } from './player-manager.service';
import { IPlayerDataProvider } from '@battle/domain';
import { Player } from '../models/player.model';
import { of } from 'rxjs';

describe('PlayerManager', () => {
  let service: PlayerManager;
  let playerDataProviderMock: jasmine.SpyObj<IPlayerDataProvider>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('IPlayerDataProvider', ['players', 'addPlayer']);

    TestBed.configureTestingModule({
      providers: [
        PlayerManager,
        { provide: IPlayerDataProvider, useValue: spy }
      ]
    });

    service = TestBed.inject(PlayerManager);
    playerDataProviderMock = TestBed.inject(IPlayerDataProvider) as jasmine.SpyObj<IPlayerDataProvider>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set players and add them if they do not exist', () => {
    // Arrange
    const playerOneName = 'PlayerOne';
    const playerTwoName = 'PlayerTwo';
    const players: Player[] = [];

    playerDataProviderMock.players.and.returnValue(players);

    // Act
    service.setPlayers(playerOneName, playerTwoName);

    // Assert
    expect(playerDataProviderMock.addPlayer).toHaveBeenCalledWith(playerOneName);
    expect(playerDataProviderMock.addPlayer).toHaveBeenCalledWith(playerTwoName);
  });

  it('should not add players if they already exist', () => {
    // Arrange
    const playerOneName = 'PlayerOne';
    const playerTwoName = 'PlayerTwo';
    const players: Player[] = [{ id: 1, name: playerOneName }, { id: 2, name: playerTwoName }];

    playerDataProviderMock.players.and.returnValue(players);

    // Act
    service.setPlayers(playerOneName, playerTwoName);

    // Assert
    expect(playerDataProviderMock.addPlayer).not.toHaveBeenCalled();
    expect(service.playerOne()!.name).toEqual(playerOneName);
    expect(service.playerTwo()!.name).toEqual(playerTwoName);
  });
});