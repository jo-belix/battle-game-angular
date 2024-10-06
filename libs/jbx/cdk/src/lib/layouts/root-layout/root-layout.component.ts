import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'jbx-root-layout',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './root-layout.component.html'
})
export class RootLayoutComponent {

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) ariaLabel: string = '';

}
