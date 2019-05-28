import React from 'react';
import { Snackbar } from 'react-snackbar-alert';

export default function CustomSnackbarComponent(props) {
  return (
    <Snackbar {...props}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{margin: '0.5em', flexGrow: 1}}>{props.message}</div>
        <button style={{marginRight: '0.5em'}}>{props.data.action}</button>
      </div>
    </Snackbar>
  );
}
