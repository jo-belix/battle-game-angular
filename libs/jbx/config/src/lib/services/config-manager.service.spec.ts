import { TestBed } from '@angular/core/testing';
import { ConfigManager, CONFIG } from './config-manager.service';
import { Config } from '../models/config.model';

describe('ConfigManager', () => {
  let service: ConfigManager;
  const mockConfig: Config = {
    apiUrl: 'http://example.com/api',
    token: 'mock-token'
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
    const controllerName = 'testController';
    const version = 'v1';
    const expectedUrl = `${mockConfig.apiUrl}/${version}/${controllerName}`;
    expect(service.getApiUrl(controllerName, version)).toBe(expectedUrl);
  });

  it('should return the correct token', () => {
    expect(service.getToken()).toBe(mockConfig.token);
  });
});