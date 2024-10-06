import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'jbx-errors',
  standalone: true,
  imports: [],
  templateUrl: './errors.component.html'
})
/**
 * Display errors for a form control
 */
export class ErrorsComponent {
@Input({ required: true }) formControl!: FormControl;
}
