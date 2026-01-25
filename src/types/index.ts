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
