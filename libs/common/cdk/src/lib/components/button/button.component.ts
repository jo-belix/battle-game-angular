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
 * @description This is a custom button component that extends the JbxComponentBase class.
 */
export class ButtonComponent extends ComponentBase {
  @Input({ required: true }) label: string = '';
}
