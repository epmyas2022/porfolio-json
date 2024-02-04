
import { defaultLocale, Locale, type cv } from "@/enum/lang/locales";

const path = window.location.pathname;

const curriculum: cv = Locale[path]?.cv || Locale[defaultLocale].cv;

export default curriculum; 