import React from 'react';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

export default function CustomAnimationTimeoutExample() {
  return (
    <SnackbarProvider animationTimeout={1000}>
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
