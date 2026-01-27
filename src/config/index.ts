
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
export const baseLayout = [
  {
    "name": "V2EX",
    "id": "MoaQ8fHjqFW_MayQNp1k9",
    "url": "https://www.v2ex.com/",
    "icon": "https://github.com/user-attachments/assets/1994761f-411c-4096-8491-a0d069d73d04",
  },
  {
    "name": "NAS",
    "id": "MrQ2t6VfNrSRhGLQVpzOM",
    "url": "http://192.168.100.2",
    "icon": "https://github.com/user-attachments/assets/eda680ba-57ad-4e78-bcb0-187f7316e6af",
  },
  {
    "name": "游民星空",
    "id": "ScITgrj6zR0ODSfXbewNv",
    "url": "https://www.gamersky.com/indexbeta/",
    "icon": "https://github.com/user-attachments/assets/ba8ae70a-6fe2-43d5-849b-5bb0048f640d",
  },
  {
    "name": "哔哩哔哩",
    "id": "Ug6obiFL8SuDM_D33Tnyk",
    "url": "https://www.bilibili.com/",
    "icon": "https://github.com/user-attachments/assets/9ee342a8-1790-4413-905d-dbdf25fb5284",
  },
  {
    "name": "qBittorrent",
    "id": "i99w7ioy6bJnV7Oz7Ckto",
    "url": "http://192.168.100.2:8085/#/",
    "icon": "https://github.com/user-attachments/assets/a2d42051-6706-4fb9-9ed2-3784f9a0bf1d",
  },
  {
    "name": "MoviePilot",
    "id": "Z7UKhKjZ3jJbIYN4C1-B-",
    "url": "http://192.168.100.2:8762",
    "icon": "https://github.com/user-attachments/assets/6ae7b670-f10c-4bc8-9404-539c3f4d1e65",
  },
  {
    "name": "GitHub",
    "id": "35w90x_VBvHe2C6S68SqL",
    "url": "https://github.com/SeahorZhang?tab=repositories",
    "icon": "https://github.com/user-attachments/assets/da7037da-82dc-439e-9015-fb362aa7524b"
  },
  {
    "name": "M-Team",
    "id": "6SL7c9yNOX-NUfkv26-XZ",
    "url": "https://zp.m-team.io/",
    "icon": "https://github.com/user-attachments/assets/a1ce47b1-58d3-4561-b9b7-1253465a3169"
  },
  {
    "name": "ChatGPT",
    "id": "7O1SZp1l_PtMQEpIiaocg",
    "url": "https://chatgpt.com/c/6774a7c9-3b00-8002-8a02-69339fe8bba1",
    "icon": "https://github.com/user-attachments/assets/06b7d54e-127d-4cb2-83a5-9312279a37f6",
  },
  {
    "name": "Emby",
    "id": "U1fiKQepNr_SLI7HZwgnM",
    "url": "http://192.168.100.2:8096/web/index.html#!/home",
    "icon": "https://github.com/user-attachments/assets/6247c1c6-a03b-4ed8-a330-5749a2cbc64a",
  },
]
export type Widget = typeof widget
