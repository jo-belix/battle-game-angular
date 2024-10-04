import { Component, inject } from '@angular/core';
import { IGameDataProvider } from '@battle/domain';
import { GameDataProvider } from '@battle/adapter';
import { ResponsiveLayoutComponent } from '@jbx/cdk';
import { ScoreTableComponent } from '../components/score-table/score-table.component';
import { StartGameFormComponent } from "../components/start-game-form/start-game-form.component";

@Component({
  selector: 'lib-battle-home',
  standalone: true,
  imports: [ResponsiveLayoutComponent, ScoreTableComponent, StartGameFormComponent],
  providers: [{ provide: IGameDataProvider, useClass: GameDataProvider}],
  templateUrl: './battle-home.component.html'
})
export class BattleHomeComponent {

  // Injects
  protected readonly gameDataProvider: IGameDataProvider = inject(IGameDataProvider);

  constructor() {
    this.gameDataProvider.loadGames();
  }

}
