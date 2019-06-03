import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

export default function BaseExample() {
  const snackbarManager = useRef();

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  }

  return (
    <div>
      <SnackbarManager ref={snackbarManager} />
      <div>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </div>
    </div>
  );
}
