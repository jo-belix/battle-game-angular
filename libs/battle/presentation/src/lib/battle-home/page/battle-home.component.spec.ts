import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleHomeComponent } from './battle-home.component';

describe('BattleHomeComponent', () => {
  let component: BattleHomeComponent;
  let fixture: ComponentFixture<BattleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
