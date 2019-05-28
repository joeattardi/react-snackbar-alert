import React from 'react';

export default function CustomSnackbarComponent({ message }) {
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
