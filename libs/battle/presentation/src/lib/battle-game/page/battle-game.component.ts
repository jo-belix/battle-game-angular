import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Game, IGameDataProvider, PartyManager, PlayerManager, Score } from '@battle/domain';
import { ButtonComponent, FormLayoutComponent, ResponsiveLayoutComponent } from '@jbx/cdk';
import { Button } from 'primeng/button';

@Component({
  selector: 'lib-battle-game',
  standalone: true,
  imports: [ResponsiveLayoutComponent, FormLayoutComponent, NgStyle, ButtonComponent],
  templateUrl: './battle-game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PartyManager]
})
export class BattleGameComponent {

  //Injects
  protected readonly playerManager: PlayerManager = inject(PlayerManager);
  protected readonly partyManager: PartyManager = inject(PartyManager);
  private readonly router: Router = inject(Router);
  private readonly gameDataProvider: IGameDataProvider = inject(IGameDataProvider);

  constructor() {
    this.partyManager.initializeParty();
  }

  /**
   * @description Event handler for the next turn button click event
   */
  onNextTurnButtonClick(): void {
    this.partyManager.playNextCard();
  }

  onEndPartyButtonClick(): void {
    this.gameDataProvider.addGame(new Game(0, 
      [
        new Score(this.playerManager.playerOne()!, this.partyManager.scorePlayerOne()),
        new Score(this.playerManager.playerTwo()!, this.partyManager.scorePlayerTwo())
      ]));
      this.router.navigate(['/']);
  }

  /**
   * @description Event handler for the home button click event
   */
  onHomeButtonClick(): void {
    this.router.navigate(['/']);
  }

}
