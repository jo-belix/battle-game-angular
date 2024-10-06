import { TestBed } from '@angular/core/testing';
import { PartyManager } from './party-manager.service';
import { Card } from '../models/card.model';

describe('PartyManager', () => {
  let service: PartyManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new PartyManager();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize party correctly', () => {
    service.initializeParty();
    expect(service.deckPlayerOne().length).toBe(26);
    expect(service.deckPlayerTwo().length).toBe(26);
    expect(service.scorePlayerOne()).toBe(0);
    expect(service.scorePlayerTwo()).toBe(0);
  });

  it('should reset party correctly', () => {
    service.initializeParty();
    service['resetParty']();
    expect(service.deckPlayerOne().length).toBe(0);
    expect(service.deckPlayerTwo().length).toBe(0);
    expect(service.foldsPlayerOne().length).toBe(0);
    expect(service.foldsPlayerTwo().length).toBe(0);
    expect(service.currentCardPlayerOne()).toBeNull();
    expect(service.currentCardPlayerTwo()).toBeNull();
    expect(service.scorePlayerOne()).toBe(0);
    expect(service.scorePlayerTwo()).toBe(0);
  });

  it('should deal cards correctly', () => {
    service['dealCards']();
    expect(service.deckPlayerOne().length).toBe(26);
    expect(service.deckPlayerTwo().length).toBe(26);
  });

  it('should play next card correctly', () => {
    service.initializeParty();
    service.playNextCard();
    expect(service.currentCardPlayerOne()).not.toBeNull();
    expect(service.currentCardPlayerTwo()).not.toBeNull();
    expect(service.deckPlayerOne().length).toBe(25);
    expect(service.deckPlayerTwo().length).toBe(25);
  });

  it('should resolve battle correctly', () => {
    const card1 = new Card('1', 1);
    const card2 = new Card('2', 2);
    service['resolveBattle'](card1, card2);
    expect(service.scorePlayerTwo()).toBe(1);
    expect(service.scorePlayerOne()).toBe(0);
  });

  it('should get game cards correctly', () => {
    const cards = service['getGameCards']();
    expect(cards.length).toBe(52);
    expect(cards[0]).toEqual(new Card('1', 1));
    expect(cards[51]).toEqual(new Card('52', 52));
  });
});