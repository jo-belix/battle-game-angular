import { ScoreDto } from "./score-dto.model";

/**
 * @description Add Game Request model
 */
export class PostGameRequest{
    constructor(public scores: ScoreDto[]) {}
}   