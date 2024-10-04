import { Component, Input, Output } from '@angular/core';
import { ComponentBase } from '../base/component-base.component';

@Component({
  selector: 'jbx-select-button',
  standalone: true,
  imports: [],
  templateUrl: './select-button.component.html'
})
export class SelectButtonComponent extends ComponentBase {

  @Input({ required: true }) options: any = '';
  @Input({ required: true }) optionKey: string = '';
  @Input({ required: true }) optionValue: string = '';
  @Input({ required: true }) value: any = '';
  @Output() valueChange: any = '';
}

