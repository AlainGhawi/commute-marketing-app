export const APP = {
  name: 'Commute',
  tagline: 'Corporate Carpooling Platform',
  baseUrl: 'https://alainghawi.github.io/commute-app/',
  copyrightYear: 2026,
  lastUpdated: 'February 2026',
  lastUpdatedFr: 'f\u00e9vrier 2026',

  emails: {
    sales: 'sales@commute-app.com',
    support: 'support@commute-app.com',
    privacy: 'privacy@commute-app.com',
    legal: 'legal@commute-app.com',
    general: 'hello@commute-app.com',
  },

  office: {
    city: 'Montreal',
    cityFr: 'Montr\u00e9al',
    region: 'QC',
    country: 'CA',
    countryName: 'Canada',
  },

  seo: {
    ogImage: 'og-image.svg',
    description:
      'Commute is a B2B corporate carpooling platform that reduces costs, cuts emissions, and brings teams closer together.',
  },
} as const;
