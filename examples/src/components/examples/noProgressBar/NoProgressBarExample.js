import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

export default function NoProgressBarExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  }

  return (
    <div>
      <SnackbarManager ref={snackbarManager} progressBar={false} />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
