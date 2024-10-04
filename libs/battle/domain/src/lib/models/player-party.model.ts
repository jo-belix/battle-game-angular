import { Card } from "./card.model";
import { Player } from "./player.model";
import { Score } from "./score.model";

/**
 * @description The player party model 
 */
export class PlayerParty {
    constructor(public player:Player, public foldCards: Card[], public deckCards:Card[], public score: number) {}
}