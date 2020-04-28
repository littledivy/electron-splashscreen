"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var main_1 = require("../src/main");
var mainWindow;
function createWindow() {
    // Create the browser window with default `show: false`.
    mainWindow = new electron_1.BrowserWindow({ width: 800, height: 400, show: false });
    // and load the index.html of the app.
    mainWindow.loadURL('https://techcrunch.com/');
    // configure splash screen.
    var splash = new main_1["default"]({
        title: "Web",
        description: "my super cool app",
        color: "#000"
    });
    // start splash screen.
    var splashInstance = splash.start();
    // Emmited once when window is ready to be shown.
    mainWindow.once('ready-to-show', function () {
        // destroy our splash instance.
        splashInstance.destroy();
        // show our main app.
        mainWindow.show();
    });
    // Emitted when the window is closed.
    mainWindow.on("closed", function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed.
electron_1.app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
