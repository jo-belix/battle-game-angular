import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ComponentBase } from '../base/component-base.component';

@Component({
  selector: 'jbx-input',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './input.component.html'
})
/**
 * @description This is a custom input component that extends the JbxComponentBase class.
 */
export class InputComponent extends ComponentBase {

  @Input({ required: true }) label: string = '';
  @Input({ required: false }) helpText: string = '';

}
