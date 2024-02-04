import { createI18n } from "vue-i18n";
import { defaultLocale, Locale } from "@/enum/lang/locales";
import es from "./es.json";
import en from "./en.json";

const path = window.location.pathname;

export default createI18n({
    legacy: false,
    locale: Locale[path]?.locale || Locale[defaultLocale].locale,
    messages: {
        es,
        en
    }
})