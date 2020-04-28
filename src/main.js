"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var render_1 = require("./render");
var splash;
function createWindow(opts) {
    // Create the browser window.
    splash = new electron_1.BrowserWindow({ width: 400, height: 300, frame: false, alwaysOnTop: true });
    // and load the index.html of the app.
    // mainWindow.loadFile(path.join(__dirname, "../index.html"));
    var file = "data:text/html;charset=UTF-8," + encodeURIComponent(render_1["default"](opts));
    splash.loadURL(file);
    // Emitted when the window is closed.
    splash.on("closed", function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        splash = null;
    });
    return splash;
}
var Splash = /** @class */ (function () {
    function Splash(opts) {
        this.active = false;
        this.options = {
            description: "my super cool app",
            title: "My app"
        };
        this.options = opts;
    }
    Splash.prototype.start = function () {
        return createWindow(this.options);
    };
    Splash.prototype.stop = function () {
        if (splash) {
            return splash.destroy();
        }
    };
    return Splash;
}());
exports["default"] = Splash;
