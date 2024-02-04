import cves from "@cves";

import cven from "@cven";

import type { Basic } from "@/interfaces/Basic";
import type { Work } from "@/interfaces/Work";
import type { Education } from "@/interfaces/Education";
import type { Project } from "@/interfaces/Project";

export interface cv {
    basics:  Basic;
    work: Work[];
    education: Education[];
    projects: Project[];
    skills: string[];
    about: string;
}
interface config {
  locale: string;
  cv: cv;
}

interface Local {
  [key: string]: config;
}

export const defaultLocale: string = "/es";

export const Locale: Local = Object.freeze({
  "/es": {
    locale: "es",
    cv: cves,
  } as config,
  "/en": {
    locale: "en",
    cv: cven,
  } as config,
});
