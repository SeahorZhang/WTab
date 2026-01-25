<script setup lang="ts">
import { pageType, delLayout, editWidget } from '@/store'
import { motion } from 'motion-v'
import { useFloating, flip, shift, autoUpdate } from '@floating-ui/vue'
import type { ContextmenuItems } from '@/types'

const props = defineProps<{
  contextmenuType: 'desktop' | 'settings' | 'widget'
  clientX: number
  clientY: number
}>()

const emit = defineEmits(['edit', 'close', 'addWidget'])
const modelValue = defineModel<boolean>({ default: false })

/* ---------------------------
 * floating-ui (idiomatic)
 * -------------------------- */

// 虚拟参考点（右键坐标）
const virtualReference = {
  getBoundingClientRect: () => ({
    width: 0,
    height: 0,
    x: props.clientX,
    y: props.clientY,
    top: props.clientY,
    left: props.clientX,
    right: props.clientX,
    bottom: props.clientY,
  }),
}

const reference = ref(virtualReference)
const floating = ref<HTMLElement | null>(null)

const { x, y, strategy, update } = useFloating(reference, floating, {
  placement: 'right-start',
  middleware: [flip(), shift()],
  strategy: 'fixed',
  whileElementsMounted: autoUpdate,
})

/* 当坐标变化或菜单打开时，刷新定位 */
watch(
  () => [props.clientX, props.clientY, modelValue.value],
  () => {
    if (modelValue.value) update()
  },
)

/* ---------------------------
 * 业务逻辑
 * -------------------------- */

function handleClick(item: { label: string; command: () => void }) {
  item.command()
  modelValue.value = false
  emit('close')
}

onClickOutside(floating, () => {
  modelValue.value = false
})

const model: ContextmenuItems = {
  desktop: [
    [
      { label: '添加图标', command: () => (pageType.value = 'addIcons') },
      { label: '常规设置', command: () => (pageType.value = 'settings') },
    ],
  ],
  settings: [
    [
      { label: '常规设置', command: () => (pageType.value = 'settings') },
      { label: '添加图标', command: () => (pageType.value = 'addIcons') },
    ],
    [{ label: '关于', command: () => (pageType.value = 'about') }],
  ],
  widget: [
    [{ label: '添加图标', command: () => (pageType.value = 'addIcons') }],
    [
      { label: '编辑此图标', command: () => (pageType.value = 'editIcons') },
      {
        label: '删除此图标',
        command: () => delLayout(editWidget.value.id),
        class: 'text-red-500 hover:bg-red-500 hover:text-white',
      },
    ],
  ],
}
</script>

<template>
  <Teleport to="body">
    <motion.ul
      v-if="modelValue"
      ref="floating"
      :initial="{ opacity: 0, scale: 0.4 }"
      :animate="{ opacity: 1, scale: 1 }"
      :exit="{ opacity: 0, scale: 0.4 }"
      :transition="{ duration: 0.3, type: 'spring' }"
      :style="{
        position: strategy,
        left: x != null ? `${x}px` : undefined,
        top: y != null ? `${y}px` : undefined,
      }"
      @contextmenu.prevent
      class="z-50 min-w-44 origin-top divide-y divide-gray-200 rounded-md bg-white px-1 py-1 text-sm shadow select-none"
    >
      <li v-for="(menuList, i) in model[contextmenuType]" :key="i" class="space-y-0.5 p-1">
        <div
          v-for="(item, j) in menuList"
          :key="j"
          class="hover:bg-primary-500 flex cursor-pointer items-center rounded-md px-2 py-1.5 transition-colors hover:text-white"
          :class="item.class"
          @click="handleClick(item)"
        >
          {{ item.label }}
        </div>
      </li>
    </motion.ul>
  </Teleport>
</template>
