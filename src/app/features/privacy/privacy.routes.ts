import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./privacy-page').then(m => m.PrivacyPage),
  },
];

export default routes;
