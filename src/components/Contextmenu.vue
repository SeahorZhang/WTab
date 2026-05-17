<script setup lang="ts">
import {
  pageType,
  delLayout,
  editWidget,
  settingsDialogVisible,
  addIconDialogVisible,
} from '@/store'
import { motion, AnimatePresence } from 'motion-v'
import { useFloating, flip, shift, autoUpdate } from '@floating-ui/vue'
import type { ContextmenuItems, pageTypeTs } from '@/types'
import AddIcon from '@/components/AddIcon.vue'

const props = defineProps<{
  contextmenuType: 'desktop' | 'settings' | 'widget'
  clientX: number
  clientY: number
}>()

const emit = defineEmits(['edit', 'close', 'addWidget'])
const modelValue = defineModel<boolean>({ default: false })

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

const handleAbout = () => {
  settingsDialogVisible.value = true
  pageType.value = 'about'
}

const handleAddOrEditIcon = (type: pageTypeTs) => {
  addIconDialogVisible.value = true
  pageType.value = type
}

const model: ContextmenuItems = {
  desktop: [
    [
      { label: '添加图标', command: () => handleAddOrEditIcon('addIcons'), icon: 'tabler:layout-grid-add' },
      // { label: '常规设置', command: () => (pageType.value = 'settings') },
    ],
    [{ label: '关于', command: handleAbout, icon: 'tabler:info-circle' }],
  ],
  settings: [
    [
      { label: '添加图标', command: () => handleAddOrEditIcon('addIcons'), icon: 'tabler:layout-grid-add' },
      // { label: '常规设置', command: () => (pageType.value = 'settings') },
    ],
    [{ label: '关于', command: handleAbout, icon: 'tabler:info-circle' }],
  ],
  widget: [
    [
      { label: '添加图标', command: () => handleAddOrEditIcon('addIcons'), icon: 'tabler:layout-grid-add' },
      // { label: '常规设置', command: () => (pageType.value = 'settings') },
    ],
    [
      { label: '编辑此图标', command: () => handleAddOrEditIcon('editIcons'), icon: 'tabler:edit' },
      {
        label: '删除此图标',
        command: () => delLayout(editWidget.value.id),
        icon: 'tabler:trash',
        class: 'text-red-500 hover:bg-red-400 hover:text-white',
      },
    ],
  ],
}
</script>

<template>
  <Teleport to="body">
    <AnimatePresence>
      <motion.ul
        v-if="modelValue"
        ref="floating"
        :initial="{ opacity: 0, scale: 0.4 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.4 }"
        :transition="{ duration: 0.3, type: 'spring' }"
        :style="{
          position: strategy,
          left: x ? `${x}px` : undefined,
          top: y ? `${y}px` : undefined,
        }"
        @contextmenu.prevent
        class="p-2 min-w-44 shadow border-gray-200 rounded-xl bg-white select-none z-50 origin-top text-sm"
      >
        <li v-for="(menuList, i) in model[contextmenuType]" :key="i" class="space-y-0.5">
          <div
            v-for="(item, j) in menuList"
            :key="j"
            :class="item.class"
            @click="handleClick(item)"
            class="h-10 px-3 hover:bg-gray-200 rounded-lg flex items-center transition-colors cursor-pointer"
          >
          <Icon :icon="item.icon" class="mr-1.5 text-lg"/>
            {{ item.label }}
          </div>
        </li>
      </motion.ul>
    </AnimatePresence>
  </Teleport>

  <AddIcon v-model="addIconDialogVisible" />
</template>
