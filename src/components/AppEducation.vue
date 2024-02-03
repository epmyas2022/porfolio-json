<template>
  <div class="py-4">
    <div class="flex justify-between">
      <div class="flex items-center gap-1">
        <a :href="education.url" class="font-semibold hover:underline">
          {{ education.institution }}</a
        >
      </div>

      <span class="text-gray-500 text-sm">{{ education.startDate }} - {{ education.endDate }}</span>
    </div>
    <p class="text-gray-500 text-sm">
     {{ education.area }}, {{ education.studyType }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Education } from "@/interfaces/Education";

const { education } = defineProps<{
  education: Education;
}>();
</script>

<style></style>
