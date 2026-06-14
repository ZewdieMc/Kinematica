// Kinematica — Electron desktop wrapper.
// Loads the same kinematica.html used by the web version, in a native window.
const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 860,
    minWidth: 860,
    minHeight: 560,
    backgroundColor: '#0a0e16',      // matches the app background, no white flash on launch
    title: 'Kinematica',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });

  win.loadFile(path.join(__dirname, 'kinematica.html'));

  // Any external link opens in the system browser instead of inside the app window.
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  const isMac = process.platform === 'darwin';
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    ...(isMac ? [{ role: 'appMenu' }] : []),
    { role: 'fileMenu' },
    { role: 'viewMenu' },   // includes reload, zoom, fullscreen, devtools
    { role: 'windowMenu' }
  ]));

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
