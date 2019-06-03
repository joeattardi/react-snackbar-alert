import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

export default function CustomAnimationTimeoutExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Custom animation timeout!'
    });
  }

  return (
    <div>
      <SnackbarManager animationTimeout={1000} ref={snackbarManager} />
      <div>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </div>
    </div>
  );
}
