import { Injectable, Signal, WritableSignal } from "@angular/core";
import { Score } from "../models/score.model";
import { Game } from "@battle/domain";
import { GameDataProvider } from "@battle/adapter";

/**
 * @description Score data provider interface
 */
@Injectable(
    {
        providedIn: 'root',
        useClass: GameDataProvider
    }
)
export abstract class IGameDataProvider {
    abstract games: Signal<Game[]>;
    abstract loadGames(): void;
    abstract addGame(game: Game): void;
}