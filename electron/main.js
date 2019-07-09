const path = require("path");
const url = require("url");

const { app, BrowserWindow } = require("electron");

const { Menu, MenuItem } = require('electron')

// require("electron-reload")(__dirname, {
//   electron: require(`${__dirname}/node_modules/electron`),
//   ignored: /.png/,
//   // ignored: /screen.png|index.html/,
//   argv: [],
//   hardResetMethod: 'exit',
// });

process.env.NODE_ENV = 'production'

function createWindow() {
  let win = new BrowserWindow({
    minWidth:1200,
    width: 1920,
    minHeight:675,
    height: 1080,
    webPreferences: { webviewTag: true, nodeIntegration: true }
  });

  win.removeMenu();
  win.maximize();
  
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
