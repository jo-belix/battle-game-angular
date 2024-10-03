import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JbxInputComponent } from './jbx-input.component';

describe('JbxInputComponent', () => {
  let component: JbxInputComponent;
  let fixture: ComponentFixture<JbxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JbxInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JbxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
