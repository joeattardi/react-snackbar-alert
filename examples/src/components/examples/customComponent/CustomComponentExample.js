import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

import CustomSnackbarComponent from './CustomSnackbarComponent';

export default function CustomComponentExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
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
