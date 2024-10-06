import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';
import { definePreset } from 'primeng/themes';
import { inject, Injectable } from '@angular/core';
import { ThemeColor } from '../enums/theme-color.enum';

@Injectable({
  providedIn: 'root'
})
/**
 * @description Manages the theme of the application.
 */
export class ThemeManager {
  // Injects
  private readonly primeNGConfig: PrimeNGConfig = inject(PrimeNGConfig);


  /**
   * @description Configures the PrimeNG library.
   */
  public configureTheme(themeColor: ThemeColor): void {
    this.primeNGConfig.theme.set({ preset: this.getPrimeNgPreset(themeColor) });
    this.primeNGConfig.ripple.set(true);
  }

  private getPrimeNgPreset(themeColor: ThemeColor): any {
    return definePreset(Aura, {
      semantic: {
        primary: {
          50: `{${themeColor}.50}`,
          100: `{${themeColor}.100}`,
          200: `{${themeColor}.200}`,
          300: `{${themeColor}.300}`,
          400: `{${themeColor}.400}`,
          500: `{${themeColor}.500}`,
          600: `{${themeColor}.600}`,
          700: `{${themeColor}.700}`,
          800: `{${themeColor}.800}`,
          900: `{${themeColor}.900}`,
          950: `{${themeColor}.950}`
        }
      }
    });
  }

}