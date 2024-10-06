import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { GameHttpClient } from './game-http-client.service';
import { ConfigManager } from '@jbx/config';
import { GetGameResponse } from '../models/game/get-game-response.model';
import { PostGameResponse } from '../models/game/post-game-response.model';
import { PostGameRequest } from '../models/game/post-game-request.model';
import { provideHttpClient } from '@angular/common/http';

describe('GameHttpClient', () => {
  let service: GameHttpClient;
  let httpMock: HttpTestingController;
  let configManager: jasmine.SpyObj<ConfigManager>;

  beforeEach(() => {
    const configManagerSpy = jasmine.createSpyObj('ConfigManager', ['getApiUrl']);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        GameHttpClient,
        { provide: ConfigManager, useValue: configManagerSpy },
      ]
    });

    service = TestBed.inject(GameHttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    configManager = TestBed.inject(ConfigManager) as jasmine.SpyObj<ConfigManager>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all games', () => {
    // Arrange
    const mockResponse: GetGameResponse[] = [{ id: 1, scores: [{playerId:1, score:12}, {playerId:2, score:14}] },{ id: 2, scores: [{playerId:1, score:10}, {playerId:2, score:16}] }];
    configManager.getApiUrl.and.returnValue('http://test-url/games/v1');

    // Act/Assert
    service.getGames().subscribe((games) => {
      expect(games).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://test-url/games/v1');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should post a game', () => {
    // Arrange
    const postGameRequest: PostGameRequest = { scores: [{playerId:1, score:12}, {playerId:2, score:14}] };
    const mockResponse: PostGameResponse = { id: 1, scores: [{playerId:1, score:12}, {playerId:2, score:14}]};
    configManager.getApiUrl.and.returnValue('http://test-url/games/v1');

    // Act/Assert
    service.postGame(postGameRequest).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://test-url/games/v1');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(postGameRequest.scores);
    req.flush(mockResponse);
  });
});