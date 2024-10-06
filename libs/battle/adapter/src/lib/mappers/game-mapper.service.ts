import { inject, Injectable } from '@angular/core';
import { Game, Player, Score } from '@battle/domain';
import { GetGameResponse, PostGameRequest, ScoreDto } from '@battle/http-client';
import { ScoreMapper } from './score-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class GameMapper {


  // Injects
  private readonly scoreMapper: ScoreMapper = inject(ScoreMapper);

  /**
   * @description Maps a game
   * @param score 
   * @returns Score
   */
  public mapFromGetGameResponse(getGameResponse: GetGameResponse, players: Player[]): Game {

    const scores: Score[] = [];
    getGameResponse.scores.forEach((scoreDto: ScoreDto) => {
      scores.push(this.scoreMapper.mapFromScoreDto(scoreDto, players));
    });

    return new Game(getGameResponse.id, scores);
  }

  /**
   * @description Maps to a PostGameRequest
   * @param game 
   * @returns 
   */
  public mapToPostGameRequest(game: Game): any {
    const scores: ScoreDto[] = game.scores.map(score => this.scoreMapper.mapToScoreDto(score));
    return new PostGameRequest(scores);
  }


}
