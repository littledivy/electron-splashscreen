import { app, BrowserWindow } from "electron";
import * as path from "path";
import renderer from "./render";

let splash: Electron.BrowserWindow;

function createWindow(opts: object) {
  // Create the browser window.
  splash = new BrowserWindow({width: 400, height: 300, frame: false, alwaysOnTop: true});

  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, "../index.html"));
  const file = "data:text/html;charset=UTF-8," + encodeURIComponent(renderer(opts));

  splash.loadURL(file);

  // Emitted when the window is closed.
  splash.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    splash = null;
  });
  return splash;
}

class Splash {
  public active: boolean = false;
  public options: object = {
    description: "my super cool app",
    title: "My app",
  };
  constructor(opts: object) {
    this.options = opts;
  }
  public start() {
    return createWindow(this.options);
  }
  public stop() {
    if (splash) {
      return splash.destroy();
    }
  }
}

export default Splash;
