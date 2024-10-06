import { Component, Input } from '@angular/core';

@Component({
  selector: 'jbx-form-layout',
  standalone: true,
  imports: [],
  templateUrl: './form-layout.component.html'
})
export class FormLayoutComponent {
  @Input({ required: true }) ariaLabel: string = '';
}
