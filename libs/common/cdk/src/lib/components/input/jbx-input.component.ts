import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { JbxComponentBase } from '../base/jbx-component-base.component';

@Component({
  selector: 'jbx-input',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './jbx-input.component.html'
})
/**
 * @description This is a custom input component that extends the JbxComponentBase class.
 */
export class JbxInputComponent extends JbxComponentBase {

  @Input({ required: true }) label: string = '';
  @Input({ required: false }) helpText: string = '';

}
