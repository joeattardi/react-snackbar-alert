import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  animation-duration: ${props => props.timeout}ms;
`;

export default function Snackbar({ timeout, children, dismissable, message, onDismiss, sticky, progressBar }) {
  let containerClass = 'react-snackbar-alert__snackbar';
  if (dismissable) {
    containerClass += ' react-snackbar-alert__dismissable';
  }

  return (
    <div className={containerClass}>
      <div className="react-snackbar-alert__snackbar-main">
        <div className="react-snackbar-alert__snackbar-content">{children || message}</div>
        {dismissable ? <button onClick={onDismiss} className="react-snackbar-alert__snackbar-close">&times;</button> : null}
      </div>
      {!sticky && progressBar ? <ProgressBar timeout={timeout} className="react-snackbar-alert__snackbar-progress-bar" /> : null}
    </div>
  );
}

Snackbar.defaultProps = {
  progressBar: true
};
