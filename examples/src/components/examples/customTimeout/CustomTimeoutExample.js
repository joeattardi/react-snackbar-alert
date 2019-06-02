import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

export default function CustomTimeoutExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: '5 second timeout!',
      timeout: 5000
    });
  }

  return (
    <div>
      <SnackbarManager ref={snackbarManager} />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
