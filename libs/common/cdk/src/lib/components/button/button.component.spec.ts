import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JbxButtonComponent } from './button.component';

describe('JbxButtonComponent', () => {
  let component: JbxButtonComponent;
  let fixture: ComponentFixture<JbxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JbxButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JbxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
