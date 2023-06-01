//@ts-nocheck
import { writable, derived } from "svelte/store";
import languages from './languages';

export const locale = writable("es");
export const locales = Object.keys(languages);
// Arreglar los scrollbars
export const overflow = writable("global:body{ overflow: auto }");

function translate(locale, key, vars) {
    // Let's throw some errors if we're trying to use keys/locales that don't exist.
    // We could improve this by using Typescript and/or fallback values.
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);
  
    // Grab the translation from the translations object.
    let text = languages[locale][key];
  
    if (!text) throw new Error(`no translation found for ${locale}.${key}`);
  
    // Replace any passed in variables in the translation string.
    Object.keys(vars).map((k) => {
      const regex = new RegExp(`{{${k}}}`, "g");
      text = text.replace(regex, vars[k]);
    });
  
    return text;
  }

export const t = derived(locale, ($locale) => (key, vars = {}) =>
  translate($locale, key, vars)
);