import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

export default function TopExample() {
  const snackbarManager = useRef();

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  }

  return (
    <div>
      <SnackbarManager ref={snackbarManager} position="top" />
      <div>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </div>
    </div>
  );
}
