import React from 'react';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

import CustomSnackbarComponent from './CustomSnackbarComponent';

export default function CustomChildComponentExample() {
  return (
    <SnackbarProvider component={CustomSnackbarComponent}>
      <Container />
    </SnackbarProvider>
  );
}

const Container = wrapComponent(function({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      message: 'Hello Snackbar!'
    });
  }

  return (
    <div>
      <button onClick={showSnackbar}>Show Snackbar</button>
    </div>
  );
});
