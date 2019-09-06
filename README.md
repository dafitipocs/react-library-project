# react-library-project

> modelo de library utilizando reactjs

[![NPM](https://img.shields.io/npm/v/react-library-project.svg)](https://www.npmjs.com/package/react-library-project) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-library-project

```

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

```bash
npm start # runs rollup with watch flag

```

The second part will be running the example/ create-react-app that's linked to the local version of your module.

# (in another tab)

```bash
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in src/ or to the example app's example/src, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

## Usage

```jsx
import React, { Component } from "react";

import MyComponent from "react-library-project";

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## License

MIT © [Newton Delbuque](https://github.com/Newton Delbuque)
