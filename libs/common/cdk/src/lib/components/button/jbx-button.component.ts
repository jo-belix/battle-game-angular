import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { JbxComponentBase } from '../base/jbx-component-base.component';

@Component({
  selector: 'jbx-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './jbx-button.component.html'
})
/**
 * @description This is a custom button component that extends the JbxComponentBase class.
 */
export class JbxButtonComponent extends JbxComponentBase {
  @Input({ required: true }) label: string = '';
}
