<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement } = store
</script>
<template>
  <div class="p-2 border">
    <h2>Count: {{ count }}</h2>
    <h3>Double: {{ doubleCount }}</h3>

    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>
