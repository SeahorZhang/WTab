<script setup lang="ts">
import bg from '@/assets/imgs/bg.jpg'

const isLoaded = ref(false)
const isVisible = ref(false)
let delayDone = false

function tryShowImage() {
  if (delayDone && isLoaded.value) {
    isVisible.value = true
  }
}

function handleLoad() {
  isLoaded.value = true
  tryShowImage()
}

onMounted(() => {
  window.setTimeout(() => {
    delayDone = true
    tryShowImage()
  }, 260)
})
</script>

<template>
  <div class="fixed inset-0 z-[-1] bg-neutral-600" />
  <img
    :src="bg"
    class="fixed z-[-1] h-full w-full scale-105 object-cover object-center transition-opacity duration-1000 ease-out select-none"
    :class="isVisible ? 'opacity-100' : 'opacity-0'"
    loading="eager"
    decoding="async"
    alt=""
    @load="handleLoad"
  />
  <div class="fixed z-[-1] h-full w-full bg-black/20" />
</template>
