import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

export default function PauseOnHoverExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  }

  return (
    <div>
      <SnackbarManager ref={snackbarManager} pauseOnHover={true} />
      <div>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </div>
    </div>
  );
}
