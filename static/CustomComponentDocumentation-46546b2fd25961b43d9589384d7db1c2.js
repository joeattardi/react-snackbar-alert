import React from 'react';

import CustomComponentExample from './CustomComponentExample';

export default function CustomComponentDocumentation() {
  return (
    <section>
      <h3>Custom Snackbar Component</h3>
        <p>
          For greater customization of the snackbar component, a custom component can be used.
          Create your custom snackbar component and pass it as the <code>component</code> prop to the <code>SnackbarManager</code>.
          The component will receive a <code>message</code> prop with the message to display.
        </p>

        <p>
          Note that if you use a custom component, you will lose the default animations.
        </p>

        <CustomComponentExample />

        <pre>
          <code className="language-jsx">{`
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
        `}</code>
      </pre>
    </section>
  );
}
