<script setup lang="ts">
import { saveLayout } from '@/store/index'
import WidgetsContainer from '@/components/WidgetsContainer.vue'
// import IconWidget from '@/views/iconWidget/index.vue'
import { VueDraggable } from 'vue-draggable-plus'
import { layout, layoutConfig } from '@/store'
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
    >
    </WidgetsContainer>
  </VueDraggable>
</template>
