import { TestBed } from '@angular/core/testing';
import { ConfigManager, CONFIG } from './config-manager.service';
import { Config } from '../models/config.model';

describe('ConfigManager', () => {
  let service: ConfigManager;
  const mockConfig: Config = {
    apiUrl: 'http://example.com/api'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigManager,
        { provide: CONFIG, useValue: mockConfig }
      ]
    });
    service = TestBed.inject(ConfigManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct API URL', () => {
    //Arrange
    const controllerName = 'users';
    const version = 'v1';
    const expectedUrl = 'http://example.com/api/v1/users';
    
    // Act/Assert
    expect(service.getApiUrl(controllerName, version)).toBe(expectedUrl);
  });
});