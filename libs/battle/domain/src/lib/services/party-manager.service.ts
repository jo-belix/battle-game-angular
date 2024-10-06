import { Injectable, signal, WritableSignal } from '@angular/core';
import { Card } from '../models/card.model';


const NB_CARDS : number = 52;

// @Injectable({
//   providedIn: 'root'
// })
export class PartyManager {

  public deckPlayerOne: WritableSignal<Card[]> = signal<Card[]>([]);
  public deckPlayerTwo: WritableSignal<Card[]> = signal<Card[]>([]);

  public foldsPlayerOne: WritableSignal<Card[]> = signal<Card[]>([]);
  public foldsPlayerTwo: WritableSignal<Card[]> = signal<Card[]>([]);

  public currentCardPlayerOne: WritableSignal<Card | null> = signal<Card | null>(null);
  public currentCardPlayerTwo: WritableSignal<Card | null> = signal<Card | null>(null);

  public scorePlayerOne: WritableSignal<number> = signal<number>(0);
  public scorePlayerTwo: WritableSignal<number> = signal<number>(0);

/**
 * @description Initialize party
 */
  public initializeParty(): void {

    // this.resetParty();
    this.dealCards();

  }

  /**
   * @description Reset party
   */
  private resetParty(): void {
    this.deckPlayerOne.set([]);
    this.deckPlayerTwo.set([]);
    this.foldsPlayerOne.set([]);
    this.foldsPlayerTwo.set([]);
    this.currentCardPlayerOne.set(null);
    this.currentCardPlayerTwo.set(null);
    this.scorePlayerOne.set(0);
    this.scorePlayerTwo.set(0);
  }

  /**
    * @description Deal cards to players
    * @param gameCards 
    * @param playerOneParty 
    * @param playerTwoParty 
    */
  private dealCards(): void {

    // Get game cards
    const gameCards = this.getGameCards();

    // Deal cards
    const deskPlayerOne = [];
    const deskPlayerTwo = [];

    //distribuer au hasard les cartes
    gameCards.sort(() => Math.random() - 0.5);

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

  /**
   * @description Play next card
   */
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
      this.currentCardPlayerTwo.set(cardPlayerTwo);

      // Resolve the battle
      this.resolveBattle(cardPlayerOne, cardPlayerTwo);
    }

  }

  /**
   * @description Resolve battle
   * @param cardPlayerOne 
   * @param cardPlayerTwo 
   */
  private resolveBattle(cardPlayerOne: Card, cardPlayerTwo: Card): void {
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
    for (let i = 1; i <= NB_CARDS; i++) {
      cards.push(new Card(i.toString(), i));
    }
    return cards;
  }
}
