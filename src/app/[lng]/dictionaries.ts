import 'server-only';

// Define the shape of your dictionary based on the English file
export type Dictionary = typeof import('../../locales/en.json');

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('../../locales/en.json').then((module) => module.default),
  de: () => import('../../locales/de.json').then((module) => module.default),
  fr: () => import('../../locales/fr.json').then((module) => module.default),
  ar: () => import('../../locales/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loader = dictionaries[locale] || dictionaries.en;
  return loader();
};