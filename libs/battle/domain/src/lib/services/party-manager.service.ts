import { Injectable, signal, WritableSignal } from '@angular/core';
import { Party } from '../models/party.model';
import { Card } from '../models/card.model';
import { PlayerParty } from '../models/player-party.model';
import { Player } from '../models/player.model';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class PartyManager {

  public deckPlayerOne: WritableSignal<Card[]> = signal<Card[]>([]);
  public deckPlayerTwo: WritableSignal<Card[]> = signal<Card[]>([]);

  public foldsPlayerOne: WritableSignal<Card[]> = signal<Card[]>([]);
  public foldsPlayerTwo: WritableSignal<Card[]> = signal<Card[]>([]);

  public currentCardPlayerOne: WritableSignal<Card | null> = signal<Card | null>(null);
  public curentCardPlayerTwo: WritableSignal<Card | null> = signal<Card | null>(null);

  public scorePlayerOne: WritableSignal<number> = signal<number>(0);
  public scorePlayerTwo: WritableSignal<number> = signal<number>(0);

  /**
    * @description Deal cards to players
    * @param gameCards 
    * @param playerOneParty 
    * @param playerTwoParty 
    */
  public dealCards(): void {

    // Get game cards
    const gameCards = this.getGameCards();


    // Deal cards
    const deskPlayerOne = [];
    const deskPlayerTwo = [];
    for (let i = 0; i < gameCards.length; i++) {
      if (i % 2 === 0) {
        deskPlayerOne.push(gameCards[i]);
      } else {
        deskPlayerTwo.push(gameCards[i]);
      }
    }
    this.deckPlayerOne.set(deskPlayerOne);
    this.deckPlayerTwo.set(deskPlayerTwo);
  }

  public playNextCard(): void {

    // We get the cards from the players
    const deckPlayerOne = this.deckPlayerOne();
    const deckPlayerTwo = this.deckPlayerTwo();

    // We get the cards to play
    const cardPlayerOne = deckPlayerOne.pop() ?? null;
    const cardPlayerTwo = deckPlayerTwo.pop() ?? null;

    if (cardPlayerOne !== null && cardPlayerTwo !== null) {
      // Update the deck
      this.deckPlayerOne.set(deckPlayerOne);
      this.deckPlayerTwo.set(deckPlayerTwo);

      // Update the current cards
      this.currentCardPlayerOne.set(cardPlayerOne);
      this.curentCardPlayerTwo.set(cardPlayerTwo);

      // Resolve the battle
      this.resolveBattme(cardPlayerOne, cardPlayerTwo);
    }

  }

  /**
   * @description Resolve battle
   * @param cardPlayerOne 
   * @param cardPlayerTwo 
   */
  private resolveBattme(cardPlayerOne: Card, cardPlayerTwo: Card): void {
    if (cardPlayerOne.value > cardPlayerTwo.value) {
      this.scorePlayerOne.set(this.scorePlayerOne() + 1);
    } else if (cardPlayerOne.value < cardPlayerTwo.value) {
      this.scorePlayerTwo.set(this.scorePlayerTwo() + 1);
    } else {
      this.foldsPlayerOne.set([...this.foldsPlayerOne(), cardPlayerOne]);
      this.foldsPlayerTwo.set([...this.foldsPlayerTwo(), cardPlayerTwo]);
    }
  }

  /**
   * @description Get game cards
   * @returns Card[]
   */
  private getGameCards(): Card[] {
    // Get game cards
    var cards: Card[] = [];
    for (let i = 0; i < 52; i++) {
      cards.push(new Card(i.toString(), i));
    }
    return cards;
  }
}
