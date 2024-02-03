<template>
  <div class="py-4">
    <div class="flex justify-between">
      <div class="flex items-center gap-1">
        <a :href="work.url" class="font-semibold hover:underline">{{ work.name }}</a>

        <div>
          <span v-for="tag in work.highlights" :key="tag" class="bg-gray-100 px-2 py-1 rounded text-xs font-bold"
            >{{ tag }}</span
          >
        </div>
      </div>

      <span class="text-gray-500 text-sm">{{ work.startDate }} - {{ work.endDate }}</span>
    </div>

    <h2 class="text-sm py-2"> {{ work.position }}</h2>

    <p class="text-xs text-gray-500 text-pretty">
     {{ work.summary }}
    </p>
  </div>
</template>

<script setup lang="ts">

import type { Work } from '@/interfaces/Work';


const { work } = defineProps<{
  work: Work;
}>();
</script>

<style></style>
