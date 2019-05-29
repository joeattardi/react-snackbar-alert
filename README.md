# react-snackbar-alert
Simple snackbar-style notifications for React

![npm](https://img.shields.io/npm/v/react-snackbar-alert.svg)

[![Build Status](https://travis-ci.org/joeattardi/react-snackbar-alert.svg?branch=master)](https://travis-ci.org/joeattardi/react-snackbar-alert)

## Installation

    npm install --save react-snackbar-alert

## Usage

The basic usage is as follows:

1. Import the `SnackbarManager` component
2. Import the CSS
3. Add the `SnackbarManager` component to your application's `render` method and save it to a ref
4. Call `create` on the ref to create snackbar alerts

### Example

```javascript
  import React from 'react';
  import { SnackbarManager } from 'react-snackbar-alert';
  import 'react-snackbar-alert/styles/react-snackbar-alert.css';

  export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.snackbarManager = React.createRef();

      this.showAlert = this.showAlert.bind(this);
    }

    showAlert() {
      this.snackbarManager.current.create({
        message: 'Hello World!'
      });
    }

    render() {
      return (
        <main>
          <SnackbarManager ref={this.snackbarManager} />
          <button onClick={this.showAlert}>Show Alert</button>
        </main>
      )
    }
  }
```

## Options

### `SnackbarManager` Props

The `SnackbarManager` component accepts the following props:

- `animationTimeout` - The duration of the show and hide animations, in milliseconds (default: 500)
- `component` - A custom component to use instead of the built-in `Snackbar` component
- `dismissable` - Whether or not the created snackbars can be manually dismissed by the user
- `timeout` - The time before a snackbar is removed, in milliseconds (default: 3000)

### `SnackbarManager.create` Options

The `create` method of `SnackbarManager` accepts an options object, which can have the following properties:

- `animationTimeout` - The duration of the show and hide animations (overrides the timeout in `SnackbarManager`)
- `data` - Custom data to use when rendering a custom notification
- `dismissable` - Whether or not this snackbar can be manually dismissed by the user
- `message` - The message to display
- `timeout` - The time before this snackbar is removed (overrides the timeout in `SnackbarManager`)