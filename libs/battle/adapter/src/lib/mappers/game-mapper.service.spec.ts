import { TestBed } from '@angular/core/testing';
import { GameMapper } from './game-mapper.service';
import { ScoreMapper } from './score-mapper.service';
import { GetGameResponse, PostGameRequest, ScoreDto } from '@battle/http-client';
import { Game, Player, Score } from '@battle/domain';

describe('GameMapper', () => {
  let gameMapper: GameMapper;
  let scoreMapper: jasmine.SpyObj<ScoreMapper>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ScoreMapper', ['mapFromScoreDto', 'mapToScoreDto']);

    TestBed.configureTestingModule({
      providers: [
        GameMapper,
        { provide: ScoreMapper, useValue: spy }
      ]
    });

    gameMapper = TestBed.inject(GameMapper);
    scoreMapper = TestBed.inject(ScoreMapper) as jasmine.SpyObj<ScoreMapper>;
  });

  it('should map from GetGameResponse to Game', () => {
    // Arrange
    const getGameResponse: GetGameResponse = {
      id: 1,
      scores: [{ playerId: 1, score: 10 }]
    };
    const players: Player[] = [{ id: 1, name: 'Player 1' }];
    const score: Score = new Score(players[0], 10);

    scoreMapper.mapFromScoreDto.and.returnValue(score);

    // Act
    const game = gameMapper.mapFromGetGameResponse(getGameResponse, players);

    // Assert
    expect(game.id).toBe(1);
    expect(game.scores.length).toBe(1);
    expect(game.scores[0]).toBe(score);
    expect(scoreMapper.mapFromScoreDto).toHaveBeenCalledWith(getGameResponse.scores[0], players);
  });

  it('should map to PostGameRequest from Game', () => {
    // Arrange
    const player: Player = { id: 1, name: 'Player 1' };
    const score: Score = new Score(player, 10);
    const game: Game = new Game(1, [score]);
    const scoreDto: ScoreDto = { playerId: 1, score: 10 };

    scoreMapper.mapToScoreDto.and.returnValue(scoreDto);

    // Act
    const postGameRequest = gameMapper.mapToPostGameRequest(game);

    // Assert
    expect(postGameRequest.scores.length).toBe(1);
    expect(postGameRequest.scores[0]).toBe(scoreDto);
    expect(scoreMapper.mapToScoreDto).toHaveBeenCalledWith(score);
  });
});