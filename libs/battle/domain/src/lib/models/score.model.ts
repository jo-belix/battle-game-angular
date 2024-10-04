import { Player } from "./player.model";

/**
 * @description Score model
 */
export class Score {
    constructor(public player : Player, public score: number) {}
}