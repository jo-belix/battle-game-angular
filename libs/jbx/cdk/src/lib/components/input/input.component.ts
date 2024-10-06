import { ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ComponentBase } from '../base/component-base.component';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'jbx-input',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ]
})
/**
 * @description Input component (A wrapper around a FramworkUI inputText component)
 */
export class InputComponent extends ComponentBase implements ControlValueAccessor {

  // Injects
  private readonly destroyRef: DestroyRef = inject(DestroyRef);


  @Input({ required: true }) label!: string;
  @Input({ required: false }) helpText: string = '';

  formControl: FormControl = new FormControl<string>('');

  private onChange!: (value: string) => void;
  private onTouch!: () => void;

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(value: string): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap(value => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}

