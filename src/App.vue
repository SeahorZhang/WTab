<script setup lang="ts">
import Main from '@/components/Main.vue'
import Background from '@/components/Background.vue'
import DateView from '@/components/DateView.vue'
import Header from '@/components/Header.vue'
import Contextmenu from '@/components/Contextmenu.vue'
import { contextmenuData } from '@/store'
import type { ContextmenuTs } from '@/types'
import 'vue-sonner/style.css'
import { Toaster } from 'vue-sonner'

function handleContextmenu(ev: MouseEvent, type: ContextmenuTs['type'] = 'desktop') {
  contextmenuData.value.type = type
  contextmenuData.value.x = ev.clientX
  contextmenuData.value.y = ev.clientY
  contextmenuData.value.visible = true
}
</script>

<template>
  <div
    class="flex h-full flex-col overflow-hidden select-none"
    @contextmenu.prevent="handleContextmenu"
  >
    <Background />
    <Header />
    <DateView />
    <Main :contextmenu="handleContextmenu" />

    <Contextmenu
      v-model="contextmenuData.visible"
      :client-x="contextmenuData.x"
      :client-y="contextmenuData.y"
      :contextmenu-type="contextmenuData.type"
    />
    <Toaster />
  </div>
</template>
