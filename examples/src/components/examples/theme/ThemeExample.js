import React from 'react';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

export default function ThemeExample() {
  return (
    <SnackbarProvider>
      <Container />
    </SnackbarProvider>
  );
}

const Container = wrapComponent(function({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      message: 'Great success!',
      theme: 'success'
    });
  }

  return (
    <div>
      <button onClick={showSnackbar}>Show Snackbar</button>
    </div>
  );
});
