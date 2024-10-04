import { Component, Input } from '@angular/core';

@Component({
  selector: 'jbx-root-layout',
  standalone: true,
  imports: [],
  templateUrl: './root-layout.component.html'
})
export class RootLayoutComponent {

  @Input({ required: true }) ariaLabel: string = '';

}
