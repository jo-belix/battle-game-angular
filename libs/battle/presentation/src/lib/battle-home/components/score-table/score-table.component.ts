import { Component, Input, Signal } from '@angular/core';
import { Game } from '@battle/domain';

@Component({
  selector: 'btl-score-table',
  standalone: true,
  imports: [],
  templateUrl: './score-table.component.html'
})
export class ScoreTableComponent {
  @Input({ required: true }) games!: Signal<Game[]>;
}
