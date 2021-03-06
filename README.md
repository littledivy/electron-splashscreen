## electron-splashscreen

![](./assets/demo.gif)

```sh
npm i @divy-work/electron-splashscreen
```

Elegant splashscreen for your cool electron apps.

![Electron CI](https://github.com/divy-work/electron-splashscreen/workflows/Electron%20CI/badge.svg)
![tslint](https://github.com/divy-work/electron-splashscreen/workflows/tslint/badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/divy-work/electron-splashscreen/badge.svg?targetFile=package.json)](https://snyk.io/test/github/divy-work/electron-splashscreen?targetFile=package.json)

### Usage

```js
var Splash = require('@divy-work/electron-splashscreen');

var splashscreen = new Splash({
  title: 'My app.',
  description: 'My super cool app.'
})

var splashscreenInstance = splashscreen.start();

setTimeout(splashscreenInstance.destroy, 5000)
```

### Example
Clone the repo, install the dependencies and then run
`npm run example` to launch the example.
