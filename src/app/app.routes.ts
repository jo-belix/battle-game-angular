import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'battle',
        pathMatch: 'full'
    },
    {
        path: 'battle',
        loadChildren: () => import('@battle/presentation').then(m => m.battleRoutes)
    },
    {
        path: '**',
        loadComponent: () => import('@jbx/cdk').then(m => m.PageNotFoundComponent)
    }
];
