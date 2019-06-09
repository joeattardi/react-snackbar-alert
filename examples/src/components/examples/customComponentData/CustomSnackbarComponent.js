import React from 'react';
import { Snackbar } from 'react-snackbar-alert';

export default function CustomSnackbarComponent(props) {
  return (
    <Snackbar {...props}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '0.5em', flexGrow: 1 }}>{props.message}</div>
        <button
          style={{
            marginRight: '0.5em',
            background: 'transparent',
            border: '1px solid #FFFFFF',
            color: '#FFFFFF',
            fontSize: '0.8em',
            borderRadius: '5px'
          }}
        >
          {props.data.action}
        </button>
      </div>
    </Snackbar>
  );
}
