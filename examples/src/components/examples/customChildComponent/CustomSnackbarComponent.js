import React from 'react';
import { Snackbar } from 'react-snackbar-alert';

export default function CustomSnackbarComponent(props) {
  return (
    <Snackbar {...props}>
      <h2 style={{ margin: 0 }}>{props.message}</h2>
    </Snackbar>
  );
}
