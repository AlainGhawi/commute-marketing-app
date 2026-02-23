import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./not-found-page').then(m => m.NotFoundPage),
  },
];

export default routes;
