<script setup lang="ts">
import { routes } from '@/router'
</script>

<template>
  <div class="flex flex-row gap-2 p-4">
    <router-link v-for="route in routes" :to="route.path" :key="route.path" class="hover:bg-gray-500 px-3 py-2 rounded">
      {{ route.name }}
    </router-link>
  </div>
  <router-view />
</template>
