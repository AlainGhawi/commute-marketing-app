import { Routes } from '@angular/router';
import { SeoMetadata } from './models/seo-metadata.model';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing-page').then(m => m.LandingPage),
    data: {
      seo: {
        title: 'Commute | Corporate Carpooling Platform',
        description:
          'Commute is a B2B corporate carpooling platform that reduces parking costs, cuts Scope 3 emissions, and brings teams closer together.',
        canonicalPath: '/',
      } satisfies SeoMetadata,
    },
  },
  {
    path: 'privacy',
    loadChildren: () => import('./features/privacy/privacy.routes'),
    data: {
      seo: {
        title: 'Privacy Policy | Commute',
        description:
          'Learn how Commute protects your data with privacy-safe home zones, multi-tenant isolation, and transparent data practices.',
        canonicalPath: '/privacy',
      } satisfies SeoMetadata,
    },
  },
  {
    path: 'terms',
    loadChildren: () => import('./features/terms/terms.routes'),
    data: {
      seo: {
        title: 'Terms of Service | Commute',
        description:
          'Read the Terms of Service for the Commute corporate carpooling platform.',
        canonicalPath: '/terms',
      } satisfies SeoMetadata,
    },
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.routes'),
    data: {
      seo: {
        title: 'Contact Us | Commute',
        description:
          'Get in touch with the Commute team for demos, support, partnerships, or general inquiries.',
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
        title: 'Page Not Found | Commute',
        description: 'The page you are looking for does not exist.',
        canonicalPath: '/',
      } satisfies SeoMetadata,
    },
  },
];
