import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function DismissableExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  } 

  return (
    <div>
      <SnackbarManager ref={snackbarManager} dismissable={true} />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
