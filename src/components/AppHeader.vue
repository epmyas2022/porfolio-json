<template>
  <div class="flex justify-between">
    <div>
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-2xl font-sans">{{ basics.name }}</h1>
        <p class="text-gray-500 text-xs max-w-md text-pretty">
          {{ basics.summary }}
        </p>
      </div>

      <div class="hidden print:flex print:flex-col print:gap-2 print:pt-1">
        <a href="#" class="underline">{{ basics.email }}</a>
        <a href="#" class="underline">{{ basics.phone }}</a>
      </div>
      <div class="flex gap-1 pt-3 print:hidden">
        <div
          v-for="profile in basics.profiles"
          :key="profile.name"
          class="border-gray-300 text-lg border px-1.5 py-0 text-gray-500 rounded-md flex justify-center hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <a :href="profile.url">
            <span :class="profile.icon"></span>
          </a>
        </div>
      </div>
    </div>

    <div>
      <div class="w-32 h-32">
        <img
          class="w-full h-full object-cover rounded-lg"
          :src="basics.image"
          alt="profile user"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Basic } from "../interfaces/Basic";
const { basics } = defineProps<{
  basics: Basic;
}>();
</script>

<style></style>
