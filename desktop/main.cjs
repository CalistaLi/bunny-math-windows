const { app, BrowserWindow, Menu, dialog, session } = require('electron');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const entry = path.join(__dirname, '../dist/index.html');
const entryURL = pathToFileURL(entry).href;
let window;

app.setName('Bunny Math');
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (!window) return;
    if (window.isMinimized()) window.restore();
    window.show();
    window.focus();
  });

  app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    session.defaultSession.setPermissionRequestHandler((_contents, _permission, callback) => callback(false));
    // All application assets are bundled. No network access is needed at runtime.
    session.defaultSession.webRequest.onBeforeRequest({ urls: ['http://*/*', 'https://*/*', 'ws://*/*', 'wss://*/*'] }, (_details, callback) => callback({ cancel: true }));

    window = new BrowserWindow({
      width: 1180,
      height: 850,
      minWidth: 820,
      minHeight: 640,
      title: 'Bunny Math',
      backgroundColor: '#FFF7FA',
      icon: path.join(__dirname, 'icon.png'),
      show: false,
      autoHideMenuBar: true,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true,
        spellcheck: false,
      },
    });

    window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
    window.webContents.on('will-navigate', (event, url) => {
      if (url.split(/[?#]/)[0] !== entryURL) event.preventDefault();
    });
    window.webContents.on('before-input-event', (event, input) => {
      if (input.type !== 'keyDown') return;
      if (input.key === 'F11') {
        event.preventDefault();
        window.setFullScreen(!window.isFullScreen());
      } else if (input.key === 'Escape' && window.isFullScreen()) {
        event.preventDefault();
        window.setFullScreen(false);
      } else if (input.control && input.key.toLowerCase() === 'p') {
        event.preventDefault();
        window.webContents.print({ printBackground: true });
      }
    });
    window.once('ready-to-show', () => window.show());
    window.on('closed', () => { window = null; });
    window.loadFile(entry).catch((error) => {
      dialog.showErrorBox('Bunny Math', `Unable to open the application.\n${error.message}`);
      app.quit();
    });
  });
}

app.on('window-all-closed', () => app.quit());
