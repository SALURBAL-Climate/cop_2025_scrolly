import { writable } from 'svelte/store';

// Function to get language from URL query parameters
function getLanguageFromURL() {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    // Support formats: ?lang=en, ?lang=es, ?lang=pt
    if (lang === 'es' || lang === 'pt' || lang === 'en') {
      return lang;
    }
  }
  return 'en'; // Default fallback
}

// Function to update URL query parameter when language changes
function updateURLLanguage(langCode) {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location);
    url.searchParams.set('lang', langCode);
    window.history.replaceState({}, '', url);
  }
}

// Create a writable store for the current language, initialized from URL
export const currentLanguage = writable(getLanguageFromURL());

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
    updateURLLanguage(code);
  }
}

// Listen for browser back/forward navigation and URL changes
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    const urlLang = getLanguageFromURL();
    currentLanguage.set(urlLang);
  });
  
  // Also check on page load
  window.addEventListener('load', () => {
    const urlLang = getLanguageFromURL();
    currentLanguage.set(urlLang);
  });
}
