import { ScoreDto } from "./score-dto.model";

/**
 * @description Add Game Response model
 */
export interface PostGameResponse {
    id: number;
    score: ScoreDto[];
}