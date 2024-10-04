import { Signal, WritableSignal } from "@angular/core";
import { Score } from "../models/score.model";
import { Game } from "@battle/domain";

/**
 * @description Score data provider interface
 */
export abstract class IGameDataProvider {
    abstract games: Signal<Game[]>;
    abstract loadGames(): void;
}