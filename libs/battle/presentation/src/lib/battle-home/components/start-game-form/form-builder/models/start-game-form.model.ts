import { FormControl } from "@angular/forms";

export interface StartGameForm {
    playerOneName: FormControl<string | null>;
    playerTwoName: FormControl<string | null>;
}