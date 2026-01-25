
export const layoutConfig = {
  baseSize: 70, // 卡片大小
  baseMargin: 40, // 卡片间距
}
export type LayoutConfig = typeof layoutConfig

export const appConfig = {
  title: 'WTab', // 起始标题
  isDate: true, // 是否显示日期
  dateFormat: 'YYYY年MM月DD日 LMLD dddd', // 日期格式
  timeFormat: 'HH:mm:ss',
  editMode: false, // 是否开启编辑模式
}
export type AppConfig = typeof appConfig

export const baseLayout = [
  {
    "icon": "https://pub-fe2c8d6bb5f843578e818856487a2592.r2.dev/45e248c502e751e9f65d9c9e8080f4c9.webp",
    "id": "MoaQ8fHjqFW_MayQNp1k9", "name": "V2EX", "url": "https://www.v2ex.com/"
  },
  {
    "icon": "https://logo.clearbit.com/qnap.com",
    "id": "MrQ2t6VfNrSRhGLQVpzOM", "name": "NAS", "url": "http://192.168.100.2"
  },
  {
    "icon": "https://pub-fe2c8d6bb5f843578e818856487a2592.r2.dev/4ab32ffc3cb267dce86ea3f098d6fcaa.webp",
    "id": "ScITgrj6zR0ODSfXbewNv", "name": "游民星空", "url": "https://www.gamersky.com/indexbeta/"
  },
  {
    "icon": "https://logo.clearbit.com/www.bilibili.com",
    "id": "Ug6obiFL8SuDM_D33Tnyk", "name": "哔哩哔哩", "url": "https://www.bilibili.com/"
  },
  {
    "icon": "https://logo.clearbit.com/qbittorrent.org/",
    "id": "i99w7ioy6bJnV7Oz7Ckto", "name": "qBittorrent", "url": "http://192.168.100.2:8085/#/"
  },
  {
    "icon": "", "id": "Z7UKhKjZ3jJbIYN4C1-B-",
    "name": "MoviePilot", "url": "http://192.168.100.2:8762"
  },
  {
    "id": "35w90x_VBvHe2C6S68SqL", "icon": "https://logo.clearbit.com/github.com",
    "name": "GitHub", "url": "https://github.com/SeahorZhang?tab=repositories"
  },
  {
    "id": "6SL7c9yNOX-NUfkv26-XZ", "name": "M-Team", "url": "https://zp.m-team.io/",
    "icon": "https://icon.horse/icon/m-team.cc"
  },
  {
    "icon": "https://logo.clearbit.com/openai.com",
    "id": "7O1SZp1l_PtMQEpIiaocg", "name": "ChatGPT",
    "url": "https://chatgpt.com/c/6774a7c9-3b00-8002-8a02-69339fe8bba1"
  },
  {
    "id": "U1fiKQepNr_SLI7HZwgnM", "icon": "https://logo.clearbit.com/emby.media",
    "name": "Emby", "url": "http://192.168.100.2:8096/web/index.html#!/home"
  },
  {
    "icon": "https://logo.clearbit.com/http://192.168.100.1:9090/ui/metacubexd/#/overview",
    "id": "fV26gHl2PNq3xtJFW94Sh", "name": "概览 - MetaCubeXD",
    "url": "http://192.168.100.1:9090/ui/metacubexd/#/overview"
  }]

export type Widget = typeof baseLayout
