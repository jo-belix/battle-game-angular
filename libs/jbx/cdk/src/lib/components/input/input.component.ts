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
 * @description Input component (A wrapper around a FramworkUI inputText component)
 */
export class InputComponent extends ComponentBase {

  @Input({ required: true }) label!: string;
  @Input({ required: false }) helpText: string = '';

}
