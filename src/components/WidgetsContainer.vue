<script setup lang="ts">
import { motion } from 'motion-v'
import Image from './Image.vue'
const props = defineProps<{
  baseSize: number
  baseMargin: number
  name: string
  url: string
  id: string
  icon: string
}>()

const initialProps = computed(() => ({
  opacity: 0,
  scale: 0.6,
  width: props.baseSize,
  height: props.baseSize,
  padding: `15px ${props.baseMargin / 2}px`,
}))

const animateProps = computed(() => ({
  opacity: 1,
  scale: 1,
}))

// 处理点击事件
function toUrl() {
  window.open(props.url, '_blank', 'noopener,noreferrer')
}

const autoTextSize = computed(() => {
  if (!props.name) return {}
  const status: Record<number, number> = {
    1: 26,
    2: 24,
    3: 20,
    4: 16,
    5: 12,
    6: 10,
  }

  const length = props.name.length
  let fontSize = status[length]
  if (length > 6) fontSize = 10 // Minimum font size
  if (length < 1) return {}

  return {
    fontSize: `${fontSize}px`,
  }
})
</script>
<template>
  <motion.div
    :initial="initialProps"
    :animate="animateProps"
    :while-hover="{ scale: 1.05 }"
    @click="toUrl"
    class="cursor-pointer"
  >
    <div
      :title="name"
      class="flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-white"
    >
      <Image v-if="icon" class="size-full" :src="icon" :alt="name" />
      <span v-else :style="autoTextSize">
        {{ name }}
      </span>
    </div>
    <p
      class="mt-1 truncate text-center text-[13px] font-medium text-white"
      style="text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px"
    >
      {{ name }}
    </p>
  </motion.div>
</template>
