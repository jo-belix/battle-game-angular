import { TestBed } from '@angular/core/testing';

import { GameHttpClientService } from './game-http-client.service';

describe('GameHttpClientService', () => {
  let service: GameHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
