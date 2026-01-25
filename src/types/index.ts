interface Item {
  label: string
  command: () => void
  class?: string
}
export interface ContextmenuItems {
  desktop: Item[][]
  settings: Item[][]
  widget: Item[][]
}

export interface ContextmenuTs {
  type: "desktop" | "widget" | "settings"
  x: number
  y: number
  visible: boolean
}