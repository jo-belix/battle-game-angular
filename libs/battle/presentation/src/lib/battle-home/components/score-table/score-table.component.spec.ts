import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreTableComponent } from './score-table.component';
import { TableModule } from 'primeng/table';
import { NgStyle } from '@angular/common';
import { signal, Signal } from '@angular/core';
import { Game } from '@battle/domain';

describe('ScoreTableComponent', () => {
  let component: ScoreTableComponent;
  let fixture: ComponentFixture<ScoreTableComponent>;
  let mockGamesSignal: Signal<Game[]>;

  beforeEach(async () => {
    mockGamesSignal = signal<Game[]>([
      { id: 1, scores: [{ player: { id: 1, name: "Player One" }, score: 10 }, { player: { id: 2, name: "Player Two" }, score: 16 }] },
      { id: 2, scores: [{ player: { id: 1, name: "Player One" }, score: 16 }, { player: { id: 2, name: "Player Two" }, score: 10 }] },
    ]);

    await TestBed.configureTestingModule({
      imports: [TableModule, NgStyle]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreTableComponent);
    component = fixture.componentInstance;
    component.games = mockGamesSignal;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display the correct number of games', () => {
  //   const compiled = fixture.nativeElement;
  //   const rows = compiled.querySelectorAll('p-table tbody tr');
  //   expect(rows.length).toBe(2);
  // });

  // it('should display the correct game names and scores', () => {
  //   const compiled = fixture.nativeElement;
  //   const firstRow = compiled.querySelector('p-table tbody tr:first-child');
  //   const secondRow = compiled.querySelector('p-table tbody tr:nth-child(2)');

  //   expect(firstRow.textContent).toContain('Game 1');
  //   expect(firstRow.textContent).toContain('100');
  //   expect(secondRow.textContent).toContain('Game 2');
  //   expect(secondRow.textContent).toContain('200');
  // });
});