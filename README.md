# react-snackbar-alert
Simple snackbar-style notifications for React

## Installation

    npm install --save react-snackbar-alert

## Usage

The basic usage is as follows:

1. Import the `SnackbarManager` component
2. Add the `SnackbarManager` component to your application's `render` method and save it to a ref
3. Call `create` on the ref to create snackbar alerts

### Example

```javascript
  import React from 'react';
  import { SnackbarManager } from 'react-snackbar-alert';

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

- `timeout` - The time before a snackbar is removed, in milliseconds (default: 3000)

### `SnackbarManager.create` Options

The `create` method of `SnackbarManager` accepts an options object, which can have the following properties:

- `timeout` - The time before this snackbar is removed (overrides the timeout in `SnackbarManager`)
- `message` - The message to display
