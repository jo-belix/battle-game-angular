import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@jbx/cdk';

@Component({
  selector: 'jbx-page-not-found',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './page-not-found.component.html'
})
/**
 * @description Page not found component
 */
export class PageNotFoundComponent {

  // Injects
  private readonly router: Router = inject(Router);

  /**
   * @description Handles the home button click event
   */
  protected onHomeButtonClick(): void {
    this.router.navigate(['/']);
  }
}
