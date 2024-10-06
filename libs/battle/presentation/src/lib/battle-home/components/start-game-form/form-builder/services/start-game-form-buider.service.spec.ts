import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { StartGameFormControls } from '../enums/start-game-form-controls.enum';
import { StartGameFormBuilder } from './start-game-form-buider.service';

describe('StartGameFormBuilder', () => {
    let service: StartGameFormBuilder;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            providers: [StartGameFormBuilder]
        });
        service = TestBed.inject(StartGameFormBuilder);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initialize the form group', () => {
        service.initializeFormGroup();
        const formGroup = service.formGroup();
        expect(formGroup).not.toBeNull();
        expect(formGroup?.controls[StartGameFormControls.PlayerOneName]).toBeTruthy();
        expect(formGroup?.controls[StartGameFormControls.PlayerTwoName]).toBeTruthy();
    });

    it('should have required validators for player names', () => {
        service.initializeFormGroup();
        const formGroup = service.formGroup();
        const playerOneNameControl = formGroup?.controls[StartGameFormControls.PlayerOneName];
        const playerTwoNameControl = formGroup?.controls[StartGameFormControls.PlayerTwoName];

        playerOneNameControl?.setValue('');
        playerTwoNameControl?.setValue('');

        expect(playerOneNameControl?.valid).toBeFalse();
        expect(playerTwoNameControl?.valid).toBeFalse();

        playerOneNameControl?.setValue('Player 1');
        playerTwoNameControl?.setValue('Player 2');

        expect(playerOneNameControl?.valid).toBeTrue();
        expect(playerTwoNameControl?.valid).toBeTrue();
    });
});