import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./terms-page').then(m => m.TermsPage),
  },
];

export default routes;
