import { TestBed } from '@angular/core/testing';

import { ConfigManager } from './config-manager.service';

describe('ConfigManagerService', () => {
  let service: ConfigManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
