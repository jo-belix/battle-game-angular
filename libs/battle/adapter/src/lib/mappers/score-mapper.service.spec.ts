import { TestBed } from '@angular/core/testing';

import { ScoreMapper } from './score-mapper.service';

describe('ScoreMapperService', () => {
  let service: ScoreMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
