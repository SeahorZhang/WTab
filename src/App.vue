<script setup lang="ts">
import Main from '@/components/Main.vue'
import Background from '@/components/Background.vue'
import DateView from '@/components/DateView.vue'
import Header from '@/components/Header.vue'
import Contextmenu from '@/components/Contextmenu.vue'

const contextmenuType = ref()
const popperVisible = ref(false)
const clientX = ref(0)
const clientY = ref(0)
function onContextmenu(ev: MouseEvent, type = 'desktop') {
  contextmenuType.value = type
  clientX.value = ev.clientX
  clientY.value = ev.clientY
  popperVisible.value = true
}
</script>

<template>
  <div
    class="flex h-full flex-col overflow-hidden select-none"
    @contextmenu.prevent="onContextmenu"
  >
    <Background />
    <Header />
    <DateView />
    <Main />

    <Contextmenu
      v-model="popperVisible"
      :client-x="clientX"
      :client-y="clientY"
      :contextmenu-type="contextmenuType"
    />
  </div>
</template>
