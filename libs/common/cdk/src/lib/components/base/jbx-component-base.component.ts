import { Component, Input } from '@angular/core';


@Component({
    selector: 'lib-component-base',
    standalone: true,
    imports: [],
    template: ''
  })
  /**
   * @description Component base class that all components should extend.
   */
  export abstract class JbxComponentBase {
    @Input({ required: true }) id: string = '';
    @Input({ required: true }) dataTestId: string = '';
    @Input({ required: true }) ariaLabel: string = '';
  }
  