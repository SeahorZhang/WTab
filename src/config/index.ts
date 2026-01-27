
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


const widget = {
  "icon": "",
  "id": "",
  "name": "",
  "url": ""
}

const iconBaseUrl = 'https://raw.githubusercontent.com/SeahorZhang/WTab/refs/heads/main/src/assets/imgs/icons/'
export const baseLayout = [
  {
    "name": "V2EX",
    "id": "MoaQ8fHjqFW_MayQNp1k9",
    "url": "https://www.v2ex.com/",
    "icon": iconBaseUrl + 'V2EX.webp',
  },
  {
    "name": "NAS",
    "id": "MrQ2t6VfNrSRhGLQVpzOM",
    "url": "http://192.168.100.2",
    "icon": iconBaseUrl + 'NAS.webp',
  },
  {
    "name": "游民星空",
    "id": "ScITgrj6zR0ODSfXbewNv",
    "url": "https://www.gamersky.com/indexbeta/",
    "icon": iconBaseUrl + 'youminxingkong.webp',
  },
  {
    "name": "哔哩哔哩",
    "id": "Ug6obiFL8SuDM_D33Tnyk",
    "url": "https://www.bilibili.com/",
    "icon": iconBaseUrl + 'bilibili.webp',
  },
  {
    "name": "qBittorrent",
    "id": "i99w7ioy6bJnV7Oz7Ckto",
    "url": "http://192.168.100.2:8085/#/",
    "icon": iconBaseUrl + 'qBittorrent.webp',
  },
  {
    "name": "MoviePilot",
    "id": "Z7UKhKjZ3jJbIYN4C1-B-",
    "url": "http://192.168.100.2:8762",
    "icon": iconBaseUrl + 'MoviePilot.png',
  },
  {
    "name": "GitHub",
    "id": "35w90x_VBvHe2C6S68SqL",
    "url": "https://github.com/SeahorZhang?tab=repositories",
    "icon": iconBaseUrl + 'GitHub.webp',
  },
  {
    "name": "M-Team",
    "id": "6SL7c9yNOX-NUfkv26-XZ",
    "url": "https://zp.m-team.io/",
    "icon": iconBaseUrl + 'M-Team.webp',
  },
  {
    "name": "ChatGPT",
    "id": "7O1SZp1l_PtMQEpIiaocg",
    "url": "https://chatgpt.com/c/6774a7c9-3b00-8002-8a02-69339fe8bba1",
    "icon": iconBaseUrl + 'ChatGPT.webp',
  },
  {
    "name": "Emby",
    "id": "U1fiKQepNr_SLI7HZwgnM",
    "url": "http://192.168.100.2:8096/web/index.html#!/home",
    "icon": iconBaseUrl + 'Emby.webp',
  },
]
export type Widget = typeof widget
