import { Component, Input } from '@angular/core';


@Component({
    selector: 'jbx-component-base',
    standalone: true,
    imports: [],
    template: ''
  })
  /**
   * @description Component base class that all components should extend.
   */
  export abstract class ComponentBase {
    @Input({ required: true }) id: string = '';
    @Input({ required: true }) dataTestId: string = '';
    @Input({ required: true }) ariaLabel: string = '';
  }
  