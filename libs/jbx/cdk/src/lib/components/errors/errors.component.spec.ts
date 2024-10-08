import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorsComponent } from './errors.component';
import '@angular/localize/init';
import { FormControl } from '@angular/forms';

describe('ErrorsComponent', () => {
  let component: ErrorsComponent;
  let fixture: ComponentFixture<ErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorsComponent);
    fixture.componentInstance.formControlNg = new FormControl();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
