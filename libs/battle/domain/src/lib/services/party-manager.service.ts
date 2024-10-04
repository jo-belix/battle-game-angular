import { Injectable } from '@angular/core';
import { Party } from '../models/party.model';
import { Card } from '../models/card.model';
import { PlayerParty } from '../models/player-party.model';
import { Player } from '../models/player.model';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class PartyManager {

  /**
   * @description Initialize party
   * @param playerOne 
   * @param playerTwo 
   * @returns 
   */
  public initializeParty(playerOne: Player, playerTwo: Player): Party {
    // Get game cards
    const gameCards = this.getGameCards();

    // Initialize player party
    const playerOneParty = this.initializePlayerParty(playerOne);
    const playerTwoParty = this.initializePlayerParty(playerTwo);

    // Deal cards
    this.dealCards(gameCards, playerOneParty, playerTwoParty);

    return new Party(playerOneParty, playerTwoParty);
  }

  /**
   * @description Deal cards to players
   * @param gameCards 
   * @param playerOneParty 
   * @param playerTwoParty 
   */
  private dealCards(gameCards: Card[], playerOneParty: PlayerParty, playerTwoParty: PlayerParty): void {
    // Deal cards
    for (let i = 0; i < gameCards.length; i++) {
      if (i % 2 === 0) {
        playerOneParty.deckCards.push(gameCards[i]);
      } else {
        playerTwoParty.deckCards.push(gameCards[i]);
      }
    }
  }

  /**
   * @description Initialize party for a player
   * @param player 
   * @param deckCards 
   * @returns 
   */
  private initializePlayerParty(player: Player): PlayerParty {
    // Initialize player party
    return new PlayerParty(player, [], [], 0);
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
