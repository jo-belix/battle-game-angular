import { KeyValuePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, InputComponent, RootLayoutComponent, SelectButtonComponent, ThemeColor, ThemeManager } from '@jbx/cdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RootLayoutComponent, ButtonComponent, InputComponent, SelectButtonComponent, KeyValuePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {

  // Types
  protected ThemeColor: typeof ThemeColor = ThemeColor;


  // Injects
  private readonly themeManager: ThemeManager = inject(ThemeManager);

  constructor() {
    // Default theme configuration
    this.themeManager.configureTheme(ThemeColor.orange);
  }

}
