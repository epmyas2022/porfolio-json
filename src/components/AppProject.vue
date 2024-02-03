<template>
  <div class="max-w-52 border p-2 rounded-md">
    <div>
      <a
        :href="project.url"
        class="hover:underline cursor-pointer font-semibold text-sm after:absolute after:w-1 after:h-1 after:rounded-full after:top-[50%] after:rigth-0 after:bg-green-500 relative after:ml-2"
        >{{ project.name }}</a
      >
    </div>

    <p class="text-xs text-gray-600 my-2">
      {{ project.description }}
    </p>

    <div class="my-4">
      <div class="flex flex-wrap gap-1">
        <span
          v-for="tag in project.highlights"
          :key="tag"
          class="bg-gray-100 px-2 py-1 rounded text-[0.65rem] font-bold"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/interfaces/Project";

const { project } = defineProps<{
  project: Project;
}>();
</script>

<style></style>
@/interfaces/Project
