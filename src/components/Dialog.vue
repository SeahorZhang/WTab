<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
const modelValue = defineModel({ default: false })
</script>
<template>
  <AnimatePresence>
    <motion.div
      v-if="modelValue"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg"
    >
    </motion.div>
    <motion.div
      class="fixed inset-0 z-51 flex items-center justify-center"
      v-if="modelValue"
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :exit="{ opacity: 0, scale: 0.4 }"
    >
      <slot />
    </motion.div>
  </AnimatePresence>
</template>
