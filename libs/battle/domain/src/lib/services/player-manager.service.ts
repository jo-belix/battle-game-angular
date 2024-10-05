import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Player } from '../models/player.model';
import { IPlayerDataProvider } from '@battle/domain';

@Injectable({
  providedIn: 'root'
})
/**
 * @description Player manager service
 */
export class PlayerManager {

  // Injects
  private readonly playerDataProvider: IPlayerDataProvider = inject(IPlayerDataProvider);

  private namePlayerOne : WritableSignal<string> = signal<string>('');
  private namePlayerTwo : WritableSignal<string> = signal<string>('');

  public playerOne: Signal<Player | null> = computed(() => {return this.playerDataProvider.players().find(player => player.name === this.namePlayerOne()) ?? null});
  public playerTwo: Signal<Player | null> = computed(() => {return this.playerDataProvider.players().find(player => player.name === this.namePlayerTwo()) ?? null});

  /**
   * @description Set players
   * @param namePlayerOne 
   * @param namePlayerTwo 
   */
  public setPlayers(namePlayerOne: string, namePlayerTwo : string) {
    this.namePlayerOne.set(namePlayerOne);
    this.namePlayerTwo.set(namePlayerTwo);
  }
  


  
}
