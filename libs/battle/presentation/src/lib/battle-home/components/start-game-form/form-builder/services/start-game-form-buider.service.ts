import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StartGameForm } from "../models/start-game-form.model";
import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { StartGameFormControls } from "../enums/start-game-form-controls.enum";


@Injectable(
    { providedIn: 'root' }
)
export class StartGameFormBuilder {

    // Injects
    private readonly formBuilder: FormBuilder = inject(FormBuilder);

    public formGroup: WritableSignal<FormGroup<StartGameForm> | null> = signal<FormGroup<StartGameForm> | null>(null);

    /**
     * @description Initialize the form group
     * @returns 
     */
    initializeFormGroup(): void {
        this.formGroup.set(this.formBuilder.group({
            [StartGameFormControls.PlayerOneName]: ['', Validators.required],
            [StartGameFormControls.PlayerTwoName]: ['', Validators.required],
        }));
    }
}