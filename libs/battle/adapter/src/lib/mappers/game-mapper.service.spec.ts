import { TestBed } from '@angular/core/testing';

import { GameMapper } from './game-mapper.service';

describe('GameMapperService', () => {
  let service: GameMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
