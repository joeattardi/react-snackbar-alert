import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

function CustomSnackbarComponent({ message }) {
  return (
    <div style={{
      background: '#FF0000',
      color: '#FFFFFF',
      padding: '0.5em',
      marginBottom: '0.5em'
    }}>
      {message}
    </div>
  );
}

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
