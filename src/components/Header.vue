<script setup lang="ts">
import SettingsDialog from './SettingsDialog/index.vue'
import { settingsDialogVisible } from '@/store'
</script>

<template>
  <nav class="flex h-10 items-center justify-end gap-2 px-4">
    <Icon
      ref="settingsRef"
      class="cursor-pointer p-2 text-xl text-white opacity-50 transition duration-200 hover:rotate-60 hover:opacity-70"
      icon="heroicons:cog-6-tooth-solid"
      @click="settingsDialogVisible = true"
    />
  </nav>

  <SettingsDialog v-model="settingsDialogVisible" />
</template>
