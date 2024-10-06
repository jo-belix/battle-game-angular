import { TestBed } from '@angular/core/testing';
import { PlayerMapper } from './player-mapper.service';
import { Player } from '@battle/domain';
import { GetPlayerResponse, PostPlayerResponse } from '@battle/http-client';

describe('PlayerMapper', () => {
  let service: PlayerMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerMapper);
  });

  it('should map from GetPlayerResponse to Player', () => {
    // Arrange
    const getPlayerResponse: GetPlayerResponse = { id: 1, name: 'John Doe' };

    // Act  
    const player: Player = service.mapFromGetPlayerResponse(getPlayerResponse);

    // Asserts
    expect(player).toEqual(new Player(1, 'John Doe'));
  });

  it('should map from GetPlayerResponses to Players', () => {

    // Arrange
    const getPlayerResponses: GetPlayerResponse[] = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ];

    // Act
    const players: Player[] = service.mapFromGetPlayerResponses(getPlayerResponses);

    // Assert
    expect(players).toEqual([
      new Player(1, 'John Doe'),
      new Player(2, 'Jane Doe')
    ]);
  });

  it('should map from PostPlayerResponse to Player', () => {
    // Arrange
    const postPlayerResponse: PostPlayerResponse = { id: 1, name: 'John Doe' };
    
    //Act
    const player: Player = service.mapFromPostPlayerResponse(postPlayerResponse);

    // Assert
    expect(player).toEqual(new Player(1, 'John Doe'));
  });
});