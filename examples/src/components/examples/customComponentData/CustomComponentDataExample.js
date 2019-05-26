import React, { useRef } from 'react';

import { Snackbar, SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

function CustomSnackbarComponent(props) {
  return (
    <Snackbar {...props}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{margin: '0.5em', flexGrow: 1}}>{props.message}</div>
        <button style={{marginRight: '0.5em'}}>{props.data.action}</button>
      </div>
    </Snackbar>
  );
}

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
