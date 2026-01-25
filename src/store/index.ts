import { baseLayout, layoutConfig as _layoutConfig, type Widget, appConfig } from '../config'
import type { ContextmenuTs } from '@/types'

export const layout = ref()
export const layoutConfig = ref(_layoutConfig)
export const config = ref(appConfig)
export const pageType = ref('')
export const settingsDialogVisible = ref(false)
export const addIconDialogVisible = ref(false)

export const editWidget = ref<Widget>({
  id: '',
  icon: '',
  name: '',
  url: '',
})

export const contextmenuData = ref<ContextmenuTs>({
  type: 'desktop',
  visible: false,
  x: 0,
  y: 0
})


const LS_KEYS = {
  LAYOUT: 'w-tab_layout'
}

// 保存数据到localStorage
const saveToStorage = useDebounceFn((key: string, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}, 300, { maxWait: 1000 })

/**
 * 保存整个布局
 */
export function saveLayout(icons: Widget) {
  layout.value = icons
  saveToStorage(LS_KEYS.LAYOUT, icons)
}

/**
 * 初始化布局
 */
export function initLayout() {
  const data = localStorage.getItem(LS_KEYS.LAYOUT) || null
  if (data) {
    layout.value = JSON.parse(data)
    return
  }

  saveToStorage(LS_KEYS.LAYOUT, baseLayout)
  layout.value = baseLayout
}

/**
 * 删除小部件
 */
export function delLayout(id: string) {
  saveLayout(layout.value.filter((item: Widget) => item.id !== id))
}
