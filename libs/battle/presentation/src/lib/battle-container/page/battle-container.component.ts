import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerDataProvider } from '@battle/adapter';
import { IPlayerDataProvider } from '@battle/domain';

@Component({
  selector: 'btl-battle-container',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './battle-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattleContainerComponent {
}
