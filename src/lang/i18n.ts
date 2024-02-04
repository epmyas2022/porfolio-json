import { createI18n } from "vue-i18n";

import es from "./es.json";
import en from "./en.json";

const path = window.location.pathname;

const locales = Object.freeze( {
    '/es': 'es',
    '/en': 'en'
}) as Record<string, string>;

export default createI18n({
    legacy: false,
    locale: locales[path] || 'es',
    messages: {
        es,
        en
    }
})