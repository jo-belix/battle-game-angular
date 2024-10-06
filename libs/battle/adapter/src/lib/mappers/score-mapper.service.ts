import { Injectable } from '@angular/core';
import { Player, Score } from '@battle/domain';
import { ScoreDto } from '@battle/http-client';

@Injectable({
  providedIn: 'root'
})
export class ScoreMapper {

  /**
   * @description Maps a score
   * @param scoreDto 
   * @param players 
   * @returns 
   */
  mapFromScoreDto(scoreDto: ScoreDto, players: Player[]): Score {
    const player = players.find(player => player.id === scoreDto.playerId) ?? new Player(0, 'unknown player');
    return new Score(player, scoreDto.score);
  }

  /**
   * @description Maps to a score dto
   * @param score 
   * @returns 
   */
  mapToScoreDto(score: Score): ScoreDto {
    return new ScoreDto(score.player.id, score.score);
  }
  
}
