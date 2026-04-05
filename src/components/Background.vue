<script setup lang="ts">
import bg from '@/assets/imgs/bg.jpg'

const isLoaded = ref(false)

function handleLoad() {
  isLoaded.value = true
}
</script>

<template>
  <div class="fixed inset-0 z-[-1] bg-gray-800" />
  <img
    :src="bg"
    class="fixed z-[-1] h-full w-full scale-105 object-cover object-center transition-opacity duration-700 ease-out select-none"
    :class="isLoaded ? 'opacity-100' : 'opacity-0'"
    loading="eager"
    decoding="async"
    alt=""
    @load="handleLoad"
  />
  <div class="fixed z-[-1] h-full w-full bg-black/20" />
</template>
