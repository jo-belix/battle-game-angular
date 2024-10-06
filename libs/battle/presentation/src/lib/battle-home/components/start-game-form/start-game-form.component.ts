import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonComponent, FormLayoutComponent, InputComponent } from '@jbx/cdk';
import { StartGameFormBuilder } from './form-builder/services/start-game-form-buider.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StartGameFormControls } from './form-builder/enums/start-game-form-controls.enum';
import { ErrorsComponent } from "../../../../../../../jbx/cdk/src/lib/components/errors/errors.component";

@Component({
  selector: 'btl-start-game-form',
  standalone: true,
  imports: [FormLayoutComponent, InputComponent, ButtonComponent, ReactiveFormsModule, ErrorsComponent],
  templateUrl: './start-game-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartGameFormComponent {

  @Output() startGame: EventEmitter<{ playerOneName: string, playerTwoName: string }> = new EventEmitter<{ playerOneName: string, playerTwoName: string }>();

  // Injects
  protected readonly startGameFormBuilder: StartGameFormBuilder = inject(StartGameFormBuilder);

  // Types
  protected readonly StartGameFormControls: typeof StartGameFormControls = StartGameFormControls;

  constructor() {
    this.startGameFormBuilder.initializeFormGroup();
  }

  protected onStartButtonClick(): void {
    this.onSubmit();
  }

  /**
   * @description Handles the form submission
   */
  public onSubmit(): void {
    if (this.startGameFormBuilder.formGroup()?.valid) {
      this.startGame.emit({
        playerOneName: this.startGameFormBuilder.formGroup()!.controls[StartGameFormControls.PlayerOneName]!.value!,
        playerTwoName: this.startGameFormBuilder.formGroup()!.controls[StartGameFormControls.PlayerTwoName]!.value!
      });
    }
  }

}
