const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
let mainWindow;

app.on('ready',() => {
  mainWindow = new BrowserWindow({
    width:1024,
    height:680,
    webPreferences: {
      nodeIntegration: true,// 开启node.js原生模块
      contextIsolation: false
   }
  })
  // 判断环境：开发、生产
  const urlLocation = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './index.html')}`
  mainWindow.loadURL(urlLocation)
  mainWindow.webContents.openDevTools()
})