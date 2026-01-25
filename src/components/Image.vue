<script setup lang="ts">
const { src, alt } = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: String,
})

const imgRef = ref()
defineExpose({ imgRef })

const isLoading = ref(true)
const hasLoadError = ref(false)
const imageSrc = ref('')

const handleLoad = () => {
  isLoading.value = false
  hasLoadError.value = false
}
const handleError = () => {
  isLoading.value = false
  hasLoadError.value = true
}

const loadImage = () => {
  // reset status
  isLoading.value = true
  hasLoadError.value = false
  imageSrc.value = src
}

watch(() => src, loadImage)

onMounted(loadImage)
</script>

<template>
  <div class="relative inline-block overflow-hidden bg-gray-100 text-gray-300">
    <div
      v-if="hasLoadError"
      class="absolute top-0 bottom-0 flex size-full flex-col items-center justify-center"
    >
      <Icon class="text-3xl" icon="tabler:photo-x" />
    </div>

    <template v-else>
      <img
        v-if="imageSrc !== undefined"
        :src="imageSrc"
        @load="handleLoad"
        @error="handleError"
        class="block size-full"
        draggable="false"
        :alt="alt"
      />

      <div
        v-if="isLoading"
        class="absolute top-0 bottom-0 flex size-full flex-col items-center justify-center"
      >
        <Icon class="animate-spin text-3xl" icon="tabler:loader-2" />
      </div>
    </template>
  </div>
</template>
