import { Score } from "./score.model";

/**
 * @description Game model
 */
export class Game {
    constructor(public id: number, public scores: Score[]) {}
}
 