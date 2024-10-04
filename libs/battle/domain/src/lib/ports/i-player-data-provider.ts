import { WritableSignal } from "@angular/core";
import { Score } from "../models/score.model";
import { Player } from "../models/player.model";


/**
 * @description Player data provider interface
 */
export abstract class IPlayerDataProvider {
    abstract players: WritableSignal<Player[]>;
    abstract loadPlayers(): void;
}