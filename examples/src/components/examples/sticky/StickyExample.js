import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

export default function StickyExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!',
      sticky: true,
      dismissable: true
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
