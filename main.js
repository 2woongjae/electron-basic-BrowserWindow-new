const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', () => {
    console.log('ready');

    mainWindow = new BrowserWindow({
        width: 600,
        height: 600
    });

    // mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.loadURL('https://github.com/2woongjae');

    secondWindow = new BrowserWindow({
        width: 300,
        height: 300,
        x: 0,
        y: 0,
        minWidth: 200,
        minHeight: 200,
        maxWidth: 500,
        maxHeight: 500,
        movable: false,
        title: 'second'
    });

    secondWindow.loadURL(`file://${__dirname}/second.html`);
});