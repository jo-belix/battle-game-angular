import { TestBed } from '@angular/core/testing';
import { PlayerDataProvider } from './player-data-provider.service';


describe('PlayerDataProvider', () => {
  let service: PlayerDataProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerDataProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
