import { ScoreDto } from "./score-dto.model";

/**
 * @description Get Game Response model
 */
export interface GetGameResponse {
    id: number;
    score: ScoreDto[];
}
