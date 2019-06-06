import React, { useRef } from 'react';

import { SnackbarProvider, SnackbarManager } from 'react-snackbar-alert';

export default function BaseExample() {
  const snackbarManager = useRef();

  function showSnackbar() {
    // snackbarManager.current.create({
    //   message: 'Hello Snackbar!'
    // });
  }

  return (
    <SnackbarProvider>
      <div>
        <div>
          <button onClick={showSnackbar}>Show Snackbar</button>
        </div>
      </div>
    </SnackbarProvider>
  );
}
