import { en } from './en';
import { fr } from './fr';

export type Locale = 'en' | 'fr';

export const translations: Record<Locale, Record<string, string>> = { en, fr };
