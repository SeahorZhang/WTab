<script setup lang="ts">
import Dialog from '@/components/Dialog.vue'
import About from './about/index.vue'

const menus = [
  // { title: '基础设置', type: 'base', component: Base },
  { title: '关于', type: 'about', component: About },
]
const currentPage = shallowRef(menus[0] || { title: '关于', type: 'about', component: About })
</script>

<template>
  <Dialog>
    <div
      class="mx-10 flex h-150 w-250 divide-x divide-gray-200 overflow-hidden rounded-xl bg-white shadow-xl"
    >
      <div class="basis-2/7 space-y-2 overflow-y-auto px-4 py-6">
        <div
          v-for="(item, i) in menus"
          :key="i"
          @click="currentPage.type = item.type"
          :class="{ 'bg-primary-200': currentPage?.type === item.type }"
          class="flex cursor-pointer items-center rounded-md px-4 py-2 text-sm hover:bg-primary-200"
        >
          <span>{{ item.title }}</span>
          <div class="flex-1"></div>
          <Icon icon="tabler:chevron-right" />
        </div>
      </div>
      <div class="flex flex-1 basis-5/7 flex-col overflow-hidden">
        <div class="flex h-14 shrink-0 items-center justify-between pr-2 pl-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ currentPage.title }}
          </h3>
          <Icon
            class="h-8 cursor-pointer rounded px-3 text-lg text-gray-600 transition hover:bg-gray-100"
            icon="tabler:x"
            @click="$emit('update:modelValue', false)"
          />
        </div>
        <div class="px-8 pt-2 pb-6">
          <component :is="currentPage.component" />
        </div>
      </div>
    </div>
  </Dialog>
</template>
