<script setup lang="ts">
import bg from '@/assets/imgs/bg.jpg'
</script>

<template>
  <img
    :src="bg"
    class="fixed z-[-1] h-full w-full scale-105 object-cover object-center select-none"
  />
  <div class="fixed z-[-1] h-full w-full bg-black/20" />
</template>
