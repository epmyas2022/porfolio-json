<script setup lang="ts">

import { basics, about, work, education, skills, projects } from "@cv";
import AppHeaderVue from "@/components/AppHeader.vue";
import AppWorkExperienceVue from "@/components/AppWorkExperience.vue";
import AppEducation from "@/components/AppEducation.vue";
import AppProject from "@/components/AppProject.vue";
import "ninja-keys";

const data = [
  {
    id: "print",
    title: "Print CV 🖨️",
    hotkey: "ctrl+p",
    handler: () => {
      window.print();
    },
  },
];
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 flex justify-center p-2 bg-white print:hidden z-10"
  >
    <p class="text-sm text-gray-700">
      <span class="mdi mdi-apple-keyboard-command"></span>

      {{ $t('command') }}
    </p>
  </div>
  <ninja-keys
    class="print:hidden"
    placeholder="Escribe un comando 😁"
    :data="data"
    hideBreadcrumbs
  >
  </ninja-keys>
  <main class="flex justify-center p-12">
    <div class="w-full md:w-[56%]">
      <header>
        <AppHeaderVue :basics="basics" />
      </header>
      <br />
      <section>
        <h1 class="text-xl font-bold font-sans pb-1">{{ $t("about")  }}</h1>
        <p class="text-pretty text-xs text-gray-500">{{ about }}</p>
      </section>
      <br />
      <section>
        <h1 class="text-xl font-bold font-sans pb-2">{{ $t("work")  }}</h1>
        <AppWorkExperienceVue
          v-for="info in work"
          :key="info.name"
          :work="info"
        />
      </section>
      <br />
      <section>
        <h1 class="text-xl font-bold font-sans pb-2">{{ $t("education")  }}</h1>
        <AppEducation
          v-for="info in education"
          :key="info.institution"
          :education="info"
        />
      </section>
      <br />
      <section>
        <h1 class="text-xl font-bold font-sans pb-2">{{ $t("skills")  }}</h1>
        <div class="flex gap-1 flex-wrap">
          <span
            class="bg-gray-600 px-2 py-1 rounded-md text-white text-xs font-bold"
            v-for="skill in skills"
            :key="skill"
            >{{ skill }}</span
          >
        </div>
      </section>
      <br />
      <section>
        <h1 class="text-xl font-bold font-sans pb-2">{{ $t("projects")  }}</h1>
        <div class="flex gap-2 flex-wrap">
          <AppProject
            v-for="project in projects"
            :key="project.name"
            :project="project"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
