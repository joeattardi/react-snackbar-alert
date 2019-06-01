import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

import CustomSnackbarComponent from './CustomSnackbarComponent';

export default function CustomComponentDataExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      data: {
        action: 'Retry'
      },
      message: '⚠️ Connection Error'
    });
  } 

  return (
    <div>
      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
