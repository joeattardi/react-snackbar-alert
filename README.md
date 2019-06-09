# react-snackbar-alert
Simple snackbar-style notifications for React

[![npm](https://img.shields.io/npm/v/react-snackbar-alert.svg)](https://npmjs.com/package/react-snackbar-alert)

[![CircleCI](https://circleci.com/gh/joeattardi/react-snackbar-alert.svg?style=svg)](https://circleci.com/gh/joeattardi/react-snackbar-alert)

![Demo video](https://github.com/joeattardi/react-snackbar-alert/blob/master/snackbar.gif?raw=true)

## Prerequisites

React Snackbar Alert requires React 16.8.0 or newer and styled-components 4 as peer dependencies:

    npm install --save react react-dom styled-components

## Installation

    npm install --save react-snackbar-alert

## API & Examples

[https://joeattardi.github.io/react-snackbar-alert/](https://joeattardi.github.io/react-snackbar-alert/)

## Usage

Snackbar notifications in 3 easy steps:

1. Import the `SnackbarProvider` component and the `wrapComponent` helper
2. Wrap your application in the `SnackbarProvider` and pass any desired configuration props
3. Wrap any components you want to create snackbars from by passing them to the `wrapComponent` helper. This will pass a `createSnackbar` prop to the passed component which can be used to show a snackbar notification.

### Example

```javascript
  import React from 'react';

  import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

  export default function App() {
    return (
      <SnackbarProvider>
        <Container />
      </SnackbarProvider>
    );
  }

  const Container = wrapComponent(function({ createSnackbar }) {
    function showSnackbar() {
      createSnackbar({
        message: 'Helo Snackbar!'
      });
    }

    return (
      <div>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </div>
    )
  });
```

## Options

### `SnackbarProvider` Props

The `SnackbarProvider` accepts the following props:

Unless otherwise noted, any of these props can be overridden for a specific snackbar instance by adding that same property to the object passed to `createSnackbar`.

- `animationTimeout` - The duration of the show and hide animations, in milliseconds (default: `500`)
- `component` - A custom component to use instead of the built-in `Snackbar` component. **Cannot be overridden for a specific snackbar.**
- `dismissable` - Whether or not the created snackbars can be manually dismissed by the user
- `pauseOnHover` - Whether or not a snackbar's timeout should be paused when it is hovered over (default: false)
- `position` - The position on screen to show the snackbars. One of `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right` (default: `bottom`). **Cannot be overridden for a specific snackbar.**
- `progressBar` - Whether or not to show an animated progress bar showing the time before a snackbar is removed (default: `true`)
- `sticky` - Whether or not snackbars should be sticky (not automatically removed) (default: `false`)
- `timeout` - The time before a snackbar is removed, in milliseconds (default: `3000`)

### `createSnackbar` Options

The `createSnackbar` function accepts an options object, which can have the following properties:

- `animationTimeout` - The duration of the show and hide animations
- `data` - Custom data to use when rendering a custom snackbar
- `dismissable` - Whether or not this snackbar can be manually dismissed by the user
- `message` - The message to display
- `pauseOnHover` - Whether or not to pause this snackbar on hover
- `progressBar` - Whether or not to show the progress bar for this snackbar
- `sticky` - Whether or not this snackbar should be sticky. Sticky snackbars are not automatically removed.
- `theme` - The theme to use for this snackbar. One of `default`, `info`, `success`, `warning`, `error` (default: `default`)
- `timeout` - The time before this snackbar is removed
