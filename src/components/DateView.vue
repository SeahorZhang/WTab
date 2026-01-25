<script setup lang="ts">
import { config } from '@/store'
import dayjs from 'dayjs'
import { PluginLunar } from 'dayjs-plugin-lunar'
import 'dayjs/locale/zh-cn'
// 设置全局语言为中文
dayjs.locale('zh-cn')
// 注册插件
dayjs.extend(PluginLunar)

const dateTime = ref(+new Date())
let timer: ReturnType<typeof requestAnimationFrame> | undefined
function stopTimer() {
  if (!timer) return
  cancelAnimationFrame(timer)
  timer = undefined
}

function startTimer() {
  const frameFunc = () => {
    dateTime.value = +new Date()
    timer = requestAnimationFrame(frameFunc)
  }
  timer = requestAnimationFrame(frameFunc)
}

const visibility = useDocumentVisibility()
watchEffect(() => {
  if (visibility.value === 'hidden') {
    stopTimer()
  } else {
    startTimer()
  }
})

const time = computed(() => {
  const format = config.value.timeFormat
  return dayjs(dateTime.value).format(format)
})
const date = computed(() => {
  const format = config.value.dateFormat
  return dayjs(dateTime.value).format(format)
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center rounded-lg text-white tabular-nums select-none sm:py-10"
    style="text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px"
    v-if="config.isDate"
  >
    <div class="text-center">
      <div class="text-5xl leading-none sm:text-7xl">
        {{ time }}
      </div>
      <div
        v-if="date"
        class="flex items-center justify-center gap-2 text-sm whitespace-nowrap sm:text-lg"
      >
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>
