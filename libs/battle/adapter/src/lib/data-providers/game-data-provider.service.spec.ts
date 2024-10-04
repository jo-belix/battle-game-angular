import { TestBed } from '@angular/core/testing';
import { GameDataProvider } from './game-data-provider.service';


describe('GameDataProvider', () => {
  let service: GameDataProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDataProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
