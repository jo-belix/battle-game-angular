import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ComponentBase } from '../base/component-base.component';

@Component({
  selector: 'jbx-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * @description Button component (A wrapper around a FramworkUI button component)
 */
export class ButtonComponent extends ComponentBase {
  @Input({ required: true }) label!: string;
  @Input() isDisabled: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  protected onbuttonClick(): void {
    this.onClick.emit();
  }

}
