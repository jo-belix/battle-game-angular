import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BattleHomeComponent } from './battle-home.component';
import { IGameDataProvider, PlayerManager } from '@battle/domain';
import { of } from 'rxjs';

xdescribe('BattleHomeComponent', () => {
  let component: BattleHomeComponent;
  let fixture: ComponentFixture<BattleHomeComponent>;
  let mockGameDataProvider: jasmine.SpyObj<IGameDataProvider>;
  let mockPlayerManager: jasmine.SpyObj<PlayerManager>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockGameDataProvider = jasmine.createSpyObj('IGameDataProvider', ['loadGames']);
    mockPlayerManager = jasmine.createSpyObj('PlayerManager', ['setPlayers']);
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: IGameDataProvider, useValue: mockGameDataProvider },
        { provide: PlayerManager, useValue: mockPlayerManager },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BattleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadGames on gameDataProvider during initialization', () => {
    expect(mockGameDataProvider.loadGames).toHaveBeenCalled();
  });

  it('should set players and navigate to game page on start game', () => {
    const players = { playerOneName: 'Player 1', playerTwoName: 'Player 2' };
    component.onStartGame(players);
    expect(mockPlayerManager.setPlayers).toHaveBeenCalledWith(players.playerOneName, players.playerTwoName);
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('battle/game');
  });
});