import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ComponentBase } from '../base/component-base.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'jbx-select-button',
  standalone: true,
  imports: [SelectButtonModule,FormsModule],
  templateUrl: './select-button.component.html'
})
export class SelectButtonComponent extends ComponentBase {

  @Input({ required: true }) options: any;
  @Input({ required: true }) optionLabel!: string;
  @Input({ required: true }) optionValue!: string;
  @Input({ required: true }) value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  onNgModelChange(event: any) {
    this.valueChange.emit(event);
  }
}

