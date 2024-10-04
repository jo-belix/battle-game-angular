import { PlayerParty } from "./player-party.model";
import { Score } from "./score.model";

/**
 * @description Party model
 */
export class Party {
    constructor(public playerPartyOne: PlayerParty, playerPartyTwo: PlayerParty) { }
}