const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path'); // Import the path module

/*
const greenworks = require('greenworks');

if (!greenworks.init()) {
  console.log('Steam API has failed to initialize.');
} else {
  console.log('Steam API initialized successfully.');
}
*/

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1600,
        height: 1200,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js') // Correctly using path.join() here
        }
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on('quit-app', () => {
    app.quit();
});
