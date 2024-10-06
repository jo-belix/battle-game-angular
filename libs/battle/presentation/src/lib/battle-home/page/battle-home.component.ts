import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IGameDataProvider, PlayerManager } from '@battle/domain';
import { GameDataProvider } from '@battle/adapter';
import { ResponsiveLayoutComponent } from '@jbx/cdk';
import { ScoreTableComponent } from '../components/score-table/score-table.component';
import { StartGameFormComponent } from "../components/start-game-form/start-game-form.component";
import { Router } from '@angular/router';


@Component({
  selector: 'lib-battle-home',
  standalone: true,
  imports: [ResponsiveLayoutComponent, ScoreTableComponent, StartGameFormComponent],
  templateUrl: './battle-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattleHomeComponent {

  // Injects
  protected readonly gameDataProvider: IGameDataProvider = inject(IGameDataProvider);
  private readonly playerManager: PlayerManager = inject(PlayerManager);
  private readonly router: Router = inject(Router);

  constructor() {
    this.gameDataProvider.loadGames();
  }

  /**
   * @description Start a new game
   * @param players 
   */
  onStartGame(players: { playerOneName: string, playerTwoName: string }): void {
    // Set the players
    this.playerManager.setPlayers(players.playerOneName, players.playerTwoName);
    // Naviate to the game page
    this.router.navigateByUrl('battle/game');
  }

}
