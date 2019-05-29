import React from 'react';

export default function Snackbar({ children, dismissable, message, onDismiss }) {
  return (
    <div className="react-snackbar-alert__snackbar">
      <div className="react-snackbar-alert__snackbar-content">{children || message}</div>
      {dismissable ? <button onClick={onDismiss} className="react-snackbar-alert__snackbar-close">&times;</button> : null}
    </div>
  );
}
