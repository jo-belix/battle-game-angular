import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ComponentBase } from '../base/component-base.component';

@Component({
  selector: 'jbx-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.component.html'
})
/**
 * @description Button component (A wrapper around a FramworkUI button component)
 */
export class ButtonComponent extends ComponentBase {
  @Input({ required: true }) label: string = '';
}
