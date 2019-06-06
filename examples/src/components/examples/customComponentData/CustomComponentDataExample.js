import React from 'react';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

import CustomSnackbarComponent from './CustomSnackbarComponent';

export default function CustomComponentDataExample() {
  return (
    <div>
      <SnackbarProvider component={CustomSnackbarComponent}>
        <Container />
      </SnackbarProvider>
    </div>
  );
}

const Container = wrapComponent(function({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      data: {
        action: 'Retry'
      },
      message: '⚠️ Connection Error'
    });
  }

  return (
    <div>
      <button onClick={showSnackbar}>Show Snackbar</button>
    </div>
  );
});
