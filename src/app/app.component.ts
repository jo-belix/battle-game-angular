import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JbxButtonComponent, JbxInputComponent, ThemeColor, ThemeManager } from '@common/cdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JbxButtonComponent, JbxInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'battle-game-angular';

  private readonly themeManager: ThemeManager = inject(ThemeManager);

  constructor() {
    this.themeManager.configureTheme(ThemeColor.green);
  } 

}
