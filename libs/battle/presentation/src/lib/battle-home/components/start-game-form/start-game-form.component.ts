import { Component } from '@angular/core';
import { ButtonComponent, FormLayoutComponent, InputComponent } from '@jbx/cdk';

@Component({
  selector: 'btl-start-game-form',
  standalone: true,
  imports: [FormLayoutComponent, InputComponent, ButtonComponent],
  templateUrl: './start-game-form.component.html'
})
export class StartGameFormComponent {

}
