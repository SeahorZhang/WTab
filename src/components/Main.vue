<script setup lang="ts">
import { saveLayout } from '@/store/index'
import WidgetsContainer from '@/components/WidgetsContainer.vue'
import { VueDraggable } from 'vue-draggable-plus'
import { layout, layoutConfig, editWidget } from '@/store'
import type { Widget } from '@/config'
import type { ContextmenuTs } from '@/types'

const props = defineProps<{
  contextmenu: (ev: MouseEvent, type: ContextmenuTs['type']) => void
}>()

function handleContextmenu(ev: MouseEvent, item: Widget) {
  editWidget.value = item
  props.contextmenu(ev, 'widget')
}
</script>

<template>
  <VueDraggable
    v-model="layout"
    class="mx-auto grid w-[min(1392px,calc(100vw-200px))] justify-center py-2.5"
    :animation="150"
    @end="saveLayout(layout)"
    :style="{
      gridTemplateColumns: `repeat(auto-fill,${layoutConfig.baseSize + layoutConfig.baseMargin}px)`,
    }"
  >
    <WidgetsContainer
      v-for="item in layout"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :url="item.url"
      :icon="item.icon"
      :baseSize="layoutConfig.baseSize"
      :baseMargin="layoutConfig.baseMargin"
      @contextmenu.prevent.stop="handleContextmenu($event, item)"
    >
    </WidgetsContainer>
  </VueDraggable>
</template>
