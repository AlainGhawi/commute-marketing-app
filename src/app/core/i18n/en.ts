import { APP } from '../config/app.constants';

export const en: Record<string, string> = {
  // Nav
  'nav.problem': 'Problem',
  'nav.solution': 'Solution',
  'nav.howItWorks': 'How it works',
  'nav.roadmap': 'Roadmap',
  'nav.security': 'Security',
  'nav.requestDemo': 'Request a demo',

  // Hero
  'hero.headline': 'The employee commute, reimagined.',
  'hero.ctaPrimary': 'Request a demo',
  'hero.ctaSecondary': 'See how it works',

  // Problem
  'problem.label': 'The problem',
  'problem.heading': 'Employee commuting is broken',
  'problem.subtitle':
    'Companies with physical offices face five costly pain points every single day.',
  'problem.0.title': 'Traffic congestion',
  'problem.0.description':
    'Employees waste hours in gridlock. Fewer cars on the road means shorter commutes for everyone.',
  'problem.0.solution': 'Fewer cars on the road = shorter commutes',
  'problem.1.title': 'Parking costs',
  'problem.1.description':
    'Companies spend $2,400\u20136,000 per parking spot per year \u2014 a hidden budget drain.',
  'problem.1.solution': 'Reduce parking demand by 30\u201340%',
  'problem.2.title': 'ESG / Scope 3 compliance',
  'problem.2.description':
    'Employee commuting (Category 7) is hard to measure and harder to reduce.',
  'problem.2.solution': 'Automated Category 7 emissions reporting',
  'problem.3.title': 'Team cohesion',
  'problem.3.description':
    'Remote and hybrid work eroded the organic connections between teammates.',
  'problem.3.solution': 'Organic bonding during shared commutes',
  'problem.4.title': 'Corporate event safety',
  'problem.4.description':
    'After-work events create liability when employees drive after drinking.',
  'problem.4.solution': 'Designated driver coordination built in',

  // Solution
  'solution.label': 'The solution',
  'solution.heading': `${APP.name} solves all five`,
  'solution.subtitle':
    'One platform that reduces costs, cuts emissions, and brings your team closer together.',

  // Steps
  'steps.label': 'How it works',
  'steps.heading': 'From sign-up to carpool in minutes',
  'steps.0.title': 'Onboard',
  'steps.0.description':
    'Sign up with your company SSO. Your profile is set up in seconds.',
  'steps.1.title': 'Set your zone',
  'steps.1.description':
    'Pick your home zone \u2014 a privacy-safe approximate area, never your exact address.',
  'steps.2.title': 'Set preferences',
  'steps.2.description':
    'Choose your commute days, time windows, and whether you drive, ride, or both.',
  'steps.3.title': 'Get matched',
  'steps.3.description':
    'Our algorithm pairs you with colleagues on similar routes each day.',
  'steps.4.title': 'Confirm & go',
  'steps.4.description':
    'Confirm your ride the evening before. Get a notification when your driver is on the way.',

  // Trust
  'trust.label': 'Trust & Security',
  'trust.heading': 'Enterprise-ready from day one',
  'trust.0.title': 'Privacy-safe home zones',
  'trust.0.description':
    `Employees never share their exact address. ${APP.name} uses approximate "home zones" to match rides while protecting personal privacy.`,
  'trust.1.title': 'SSO / OIDC authentication',
  'trust.1.description':
    'Integrates with Microsoft Entra ID and other enterprise identity providers. No new passwords for your employees to manage.',
  'trust.2.title': 'Multi-tenant architecture',
  'trust.2.description':
    'Each company\'s data is fully isolated. Your employee information, ride history, and analytics are never shared across tenants.',

  // Footer
  'footer.heading': 'Ready to reimagine your corporate commute?',
  'footer.subtitle':
    'Get early access for your company. We\'ll reach out to schedule a demo.',
  'footer.placeholder': 'you@company.com',
  'footer.privacy': 'Privacy',
  'footer.terms': 'Terms',
  'footer.contact': 'Contact',
  'footer.copy': `\u00a9 ${APP.copyrightYear} ${APP.name}. All rights reserved.`,

  // Snackbar
  'snackbar.success': 'Thanks! We\'ll reach out soon.',

  // Page shell
  'pageShell.backToHome': 'Back to Home',

  // Privacy page
  'privacy.title': 'Privacy Policy',
  'privacy.lastUpdated': `Last updated: ${APP.lastUpdated}`,
  'privacy.intro':
    `${APP.name} ("we", "us", or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and safeguard your information when you use our corporate carpooling platform.`,
  'privacy.collection.heading': 'Information We Collect',
  'privacy.collection.text':
    'We collect information that your employer provides during tenant onboarding, information you provide when creating your profile (name, work email, commute preferences, home zone), and usage data generated through the platform (ride history, match data, confirmation status).',
  'privacy.homeZone.heading': 'Home Zone Privacy',
  'privacy.homeZone.text':
    `${APP.name} uses approximate "home zones" rather than exact addresses. Your precise home location is never stored, shared with other users, or visible to your employer. Home zones represent general areas used solely for ride-matching algorithms.`,
  'privacy.usage.heading': 'How We Use Your Information',
  'privacy.usage.text':
    'We use your information to match you with colleagues on similar commute routes, to provide ride coordination and notifications, to generate anonymized analytics for your employer\'s sustainability reporting (ESG Scope 3, Category 7), and to improve our matching algorithms.',
  'privacy.sharing.heading': 'Data Sharing & Multi-Tenancy',
  'privacy.sharing.text':
    'Your data is fully isolated within your employer\'s tenant. We never share employee data across tenants. Co-riders can see only your first name and approximate home zone. Your employer\'s administrators can access aggregated, anonymized commute statistics only.',
  'privacy.retention.heading': 'Data Retention',
  'privacy.retention.text':
    'We retain your data for the duration of your employer\'s subscription. Upon termination of the subscription or at your request, your personal data will be deleted within 30 days.',
  'privacy.rights.heading': 'Your Rights',
  'privacy.rights.text':
    'You have the right to access, correct, or request deletion of your personal data. You can update your profile and preferences at any time through the app. To request full data deletion, contact your company administrator or reach out to us directly.',
  'privacy.contact.heading': 'Contact Us',
  'privacy.contact.text':
    `If you have questions about this Privacy Policy, please contact us at ${APP.emails.privacy}.`,

  // Terms page
  'terms.title': 'Terms of Service',
  'terms.lastUpdated': `Last updated: ${APP.lastUpdated}`,
  'terms.intro':
    `These Terms of Service ("Terms") govern your use of the ${APP.name} corporate carpooling platform. By accessing or using ${APP.name}, you agree to be bound by these Terms.`,
  'terms.service.heading': 'Service Description',
  'terms.service.text':
    `${APP.name} is a B2B corporate carpooling platform that facilitates ride-sharing among employees of subscribing organizations. ${APP.name} is a matching and coordination service \u2014 we do not provide transportation ourselves.`,
  'terms.eligibility.heading': 'Eligibility',
  'terms.eligibility.text':
    `${APP.name} is available to employees of organizations that have an active subscription. You must be authorized by your employer to use the platform. Drivers must hold a valid driver's license and adequate vehicle insurance as required by local laws.`,
  'terms.responsibilities.heading': 'User Responsibilities',
  'terms.responsibilities.text':
    'You agree to provide accurate profile information, to confirm or cancel rides in a timely manner, to treat co-riders with respect and courtesy, and to comply with all applicable traffic laws when driving. Repeated no-shows or cancellations may result in reduced matching priority.',
  'terms.liability.heading': 'Limitation of Liability',
  'terms.liability.text':
    `${APP.name} facilitates carpooling matches but is not responsible for the conduct of drivers or riders, vehicle conditions, route choices, or any incidents that occur during commutes. Users participate in carpooling at their own risk.`,
  'terms.ip.heading': 'Intellectual Property',
  'terms.ip.text':
    `The ${APP.name} platform, including its design, algorithms, and content, is the intellectual property of ${APP.name} and is protected by applicable laws. You may not reproduce, distribute, or create derivative works without our written consent.`,
  'terms.termination.heading': 'Termination',
  'terms.termination.text':
    `Your access may be terminated by your employer or by ${APP.name} if you violate these Terms. Upon termination, your right to use the platform ceases immediately.`,
  'terms.changes.heading': 'Changes to These Terms',
  'terms.changes.text':
    'We may update these Terms from time to time. We will notify users of material changes through the platform. Continued use after changes constitutes acceptance of the revised Terms.',
  'terms.contact.heading': 'Contact',
  'terms.contact.text': `For questions about these Terms, contact us at ${APP.emails.legal}.`,

  // Contact page
  'contact.title': 'Contact Us',
  'contact.subtitle':
    `We'd love to hear from you. Whether you're interested in bringing ${APP.name} to your organization or have questions about our platform, reach out through any of the channels below.`,
  'contact.sales.heading': 'Sales & Demos',
  'contact.sales.text': `Interested in ${APP.name} for your company? Request a demo or get pricing information.`,
  'contact.sales.email': APP.emails.sales,
  'contact.support.heading': 'Support',
  'contact.support.text': 'Need help with your account or have a technical question?',
  'contact.support.email': APP.emails.support,
  'contact.general.heading': 'General Inquiries',
  'contact.general.text': 'For press, partnerships, or other inquiries.',
  'contact.general.email': APP.emails.general,
  'contact.office.heading': 'Office',
  'contact.office.text': `${APP.office.city}, ${APP.office.region}, ${APP.office.countryName}`,

  // Not Found page
  'notFound.message': 'The page you\'re looking for doesn\'t exist.',
  'notFound.backHome': 'Back to Home',
};
