import { Routes } from '@angular/router';
import { SeoMetadata } from './models/seo-metadata.model';
import { APP } from './core/config/app.constants';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing-page').then(m => m.LandingPage),
    data: {
      seo: {
        title: `${APP.name} | ${APP.tagline}`,
        description: APP.seo.description,
        canonicalPath: '/',
      } satisfies SeoMetadata,
    },
  },
  {
    path: 'privacy',
    loadChildren: () => import('./features/privacy/privacy.routes'),
    data: {
      seo: {
        title: `Privacy Policy | ${APP.name}`,
        description:
          `Learn how ${APP.name} protects your data with privacy-safe home zones, multi-tenant isolation, and transparent data practices.`,
        canonicalPath: '/privacy',
      } satisfies SeoMetadata,
    },
  },
  {
    path: 'terms',
    loadChildren: () => import('./features/terms/terms.routes'),
    data: {
      seo: {
        title: `Terms of Service | ${APP.name}`,
        description:
          `Read the Terms of Service for the ${APP.name} corporate carpooling platform.`,
        canonicalPath: '/terms',
      } satisfies SeoMetadata,
    },
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.routes'),
    data: {
      seo: {
        title: `Contact Us | ${APP.name}`,
        description:
          `Get in touch with the ${APP.name} team for demos, support, partnerships, or general inquiries.`,
        canonicalPath: '/contact',
      } satisfies SeoMetadata,
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found-page').then(m => m.NotFoundPage),
    data: {
      seo: {
        title: `Page Not Found | ${APP.name}`,
        description: 'The page you are looking for does not exist.',
        canonicalPath: '/',
      } satisfies SeoMetadata,
    },
  },
];
