import { Injectable, WritableSignal } from "@angular/core";
import { Score } from "../models/score.model";
import { Player } from "../models/player.model";
import { PlayerDataProvider } from "@battle/adapter";


/**
 * @description Player data provider interface
 */
@Injectable(
    {
        providedIn: 'root',
        useClass: PlayerDataProvider
    }
)
export abstract class IPlayerDataProvider {
    abstract players: WritableSignal<Player[]>;
    abstract loadPlayers(): void;
    abstract addPlayer(name: string): void;
}