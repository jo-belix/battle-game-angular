import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Signal } from '@angular/core';
import { Game } from '@battle/domain';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'btl-score-table',
  standalone: true,
  imports: [TableModule, NgStyle],
  templateUrl: './score-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreTableComponent {
  @Input({ required: true }) games!: Signal<Game[]>;
}
