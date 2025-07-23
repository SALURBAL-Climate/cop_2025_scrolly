import { writable } from 'svelte/store';

// Create a writable store for the current language
export const currentLanguage = writable('en');

// Language configurations
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    flag: 'EN'
  },
  es: {
    code: 'es',
    name: 'Español', 
    flag: 'ES'
  },
  pt: {
    code: 'pt',
    name: 'Português',
    flag: 'PT'
  }
};

// Helper function to get language data
export function getLanguageData(code) {
  return languages[code] || languages.en;
}

// Helper function to change language
export function setLanguage(code) {
  if (languages[code]) {
    currentLanguage.set(code);
  }
}
