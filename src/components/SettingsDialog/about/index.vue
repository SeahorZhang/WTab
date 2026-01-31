<script setup lang="ts">
import dayjs from 'dayjs'
import { version } from '~build/package'
import now from '~build/time'
// import Log from './Log.vue'

const baseUrl = import.meta.env.VITE_R2_BASE_URL

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/SeahorZhang/WTab',
    icon: 'tabler-brand-github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/SeahorZhang',
    icon: 'tabler-brand-x',
  },
]
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 p-4 shadow-sm">
      <div class="flex items-center gap-4">
        <img
          :src="`${baseUrl}base/miaomiao.svg`"
          alt="App Icon"
          class="h-16 w-16 rounded-xl shadow-sm ring-1 ring-gray-200"
        />

        <div class="flex-1">
          <div class="flex items-end gap-3">
            <h1 class="text-2xl font-bold text-gray-900">WTab</h1>
            <span class="text-sm text-gray-500">
              {{ `v${version}` }}
            </span>
          </div>
          <p class="mt-1 text-sm text-gray-600">一个简洁的桌面小组件应用</p>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
        <div class="flex items-center gap-1 text-sm text-gray-500">
          <Icon icon="tabler-clock-up" />
          <span>{{ dayjs(now).format('YYYY-MM-DD HH:mm:ss') }}</span>
        </div>
        <div class="flex gap-2">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="group relative flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            <Icon
              :icon="link.icon"
              class="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-gray-900"
            />
            <span
              class="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-900"
            >
              {{ link.name }}</span
            >
          </a>
        </div>
      </div>
    </div>

    <!-- <div
      class="rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 p-6 shadow-sm dark:from-gray-800/50 dark:to-gray-900/50"
    >
      <h2 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">更新日志</h2>
      <Log />
    </div> -->
  </div>
</template>
