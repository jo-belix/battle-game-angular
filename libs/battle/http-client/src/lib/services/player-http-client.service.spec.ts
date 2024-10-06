import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PlayerHttpClient } from './player-http-client.service';
import { ConfigManager } from '@jbx/config';
import { GetPlayerResponse } from '../models/player/get-player-response.model';
import { PostPlayerRequest } from '../models/player/post-player-request.model';
import { PostPlayerResponse } from '../models/player/post-player-response.model';
import { provideHttpClient } from '@angular/common/http';

describe('PlayerHttpClient', () => {
  let service: PlayerHttpClient;
  let httpMock: HttpTestingController;
  let configManager: ConfigManager;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        PlayerHttpClient,
        {
          provide: ConfigManager,
          useValue: {
            getApiUrl: (controllerName: string, version: string) => `https://api.example.com/${version}/${controllerName}`
          }
        },
      ]
    });

    service = TestBed.inject(PlayerHttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    configManager = TestBed.inject(ConfigManager);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<GetPlayerResponse[]> when getPlayers is called', () => {
    // Arrange
    const mockResponse: GetPlayerResponse[] = [{ id: 1, name: 'Player1' }];

    // Act/Assert
    service.getPlayers().subscribe((players) => {
      expect(players).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.example.com/v1/players');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should return an Observable<PostPlayerResponse> when postPlayer is called', () => {
    // Arrange
    const mockRequest: PostPlayerRequest = { name: 'Player1' };
    const mockResponse: PostPlayerResponse = { id: 1, name: 'Player1' };

    // Act/Assert
    service.postPlayer(mockRequest).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.example.com/v1/players');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockRequest);
    req.flush(mockResponse);
  });
});