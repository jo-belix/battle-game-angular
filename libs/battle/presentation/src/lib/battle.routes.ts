import { Routes } from "@angular/router";
import { BattleContainerComponent } from "./battle-container/page/battle-container.component";
import { BattleHomeComponent } from "./battle-home/page/battle-home.component";
import { BattleGameComponent } from "./battle-game/page/battle-game.component";

export const battleRoutes: Routes = [
   {
      path: '',
      component: BattleContainerComponent,
      children: [
         {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
         },
         {
            path: 'home',
            component: BattleHomeComponent
         },
         {
            path: 'game',
            component: BattleGameComponent
         }

      ]
   }


]