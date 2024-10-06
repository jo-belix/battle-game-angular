import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BattleGameComponent } from './battle-game.component';
import { PlayerManager, PartyManager, IGameDataProvider, Game, Score } from '@battle/domain';
import { of } from 'rxjs';

xdescribe('BattleGameComponent', () => {
  let component: BattleGameComponent;
  let fixture: ComponentFixture<BattleGameComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockPlayerManager: jasmine.SpyObj<PlayerManager>;
  let mockPartyManager: jasmine.SpyObj<PartyManager>;
  let mockGameDataProvider: jasmine.SpyObj<IGameDataProvider>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockPlayerManager = jasmine.createSpyObj('PlayerManager', ['playerOne', 'playerTwo']);
    mockPartyManager = jasmine.createSpyObj('PartyManager', ['initializeParty', 'playNextCard', 'scorePlayerOne', 'scorePlayerTwo']);
    mockGameDataProvider = jasmine.createSpyObj('IGameDataProvider', ['addGame']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: PlayerManager, useValue: mockPlayerManager },
        { provide: PartyManager, useValue: mockPartyManager },
        { provide: IGameDataProvider, useValue: mockGameDataProvider }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BattleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize party on creation', () => {
    expect(mockPartyManager.initializeParty).toHaveBeenCalled();
  });

  it('should play next card on next turn button click', () => {
    component.onNextTurnButtonClick();
    expect(mockPartyManager.playNextCard).toHaveBeenCalled();
  });

  it('should add game and navigate to home on end party button click', () => {
    const playerOne = { id: 1, name: 'Player One' };
    const playerTwo = { id: 2, name: 'Player Two' };
    mockPlayerManager.playerOne.and.returnValue(playerOne);
    mockPlayerManager.playerTwo.and.returnValue(playerTwo);
    mockPartyManager.scorePlayerOne.and.returnValue(10);
    mockPartyManager.scorePlayerTwo.and.returnValue(20);

    component.onEndPartyButtonClick();

    expect(mockGameDataProvider.addGame).toHaveBeenCalledWith(new Game(0, [
      new Score(playerOne, 10),
      new Score(playerTwo, 20)
    ]));
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should navigate to home on home button click', () => {
    component.onHomeButtonClick();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});