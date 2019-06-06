import React from 'react';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

export default function NoProgressBarExample() {
  return (
    <SnackbarProvider progressBar={false}>
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
