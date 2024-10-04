import { TestBed } from '@angular/core/testing';

import { PlayerHttpClientService } from './player-http-client.service';

describe('PlayerHttpClientService', () => {
  let service: PlayerHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
