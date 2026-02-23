import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./contact-page').then(m => m.ContactPage),
  },
];

export default routes;
