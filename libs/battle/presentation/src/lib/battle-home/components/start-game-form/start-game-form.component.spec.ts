import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartGameFormComponent } from './start-game-form.component';
import { StartGameFormBuilder } from './form-builder/services/start-game-form-buider.service';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { StartGameFormControls } from './form-builder/enums/start-game-form-controls.enum';

describe('StartGameFormComponent', () => {
  let component: StartGameFormComponent;
  let fixture: ComponentFixture<StartGameFormComponent>;
  let startGameFormBuilder: StartGameFormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, StartGameFormComponent],
      providers: [StartGameFormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(StartGameFormComponent);
    component = fixture.componentInstance;
    startGameFormBuilder = TestBed.inject(StartGameFormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize the form group on component creation', () => {
  //   spyOn(startGameFormBuilder, 'initializeFormGroup');
  //   expect(startGameFormBuilder.initializeFormGroup).toHaveBeenCalled();
  // });

  it('should emit startGame event with player names on valid form submission', () => {
    const playerOneName = 'Player One';
    const playerTwoName = 'Player Two';
    component.startGameFormBuilder.formGroup()!.controls[StartGameFormControls.PlayerOneName].setValue(playerOneName);
    component.startGameFormBuilder.formGroup()!.controls[StartGameFormControls.PlayerTwoName].setValue(playerTwoName);

    spyOn(component.startGame, 'emit');
    component.onSubmit();

    expect(component.startGame.emit).toHaveBeenCalledWith({ playerOneName, playerTwoName });
  });

  it('should not emit startGame event on invalid form submission', () => {
    spyOn(component.startGame, 'emit');
    component.onSubmit();
    expect(component.startGame.emit).not.toHaveBeenCalled();
  });

  // it('should call onSubmit when start button is clicked', () => {
  //   spyOn(component, 'onSubmit');
  //   const button = fixture.debugElement.query(By.css('button')).nativeElement;
  //   button.click();
  //   expect(component.onSubmit).toHaveBeenCalled();
  // });
});