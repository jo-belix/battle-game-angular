import { TestBed } from '@angular/core/testing';

import { PartyManagerService } from './party-manager.service';

describe('PartyManagerService', () => {
  let service: PartyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
