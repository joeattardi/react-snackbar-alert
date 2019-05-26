import React from 'react';

import CustomChildComponentExample from './CustomChildComponentExample';

export default function CustomChildComponentDocumentation() {
  return (
    <section>
      <h3>Extending the Snackbar Component</h3>

      <p>
        You can also extend the default <code>Snackbar</code> component.
        This allows you to keep the default styling and animation, but also add your own child content to the snackbar.
      </p>

      <p>
        To extend the default component, import the <code>Snackbar</code> component and use it in your custom component.
        Make sure to pass all received props along to the <code>Snackbar</code> component, or else the animations won't work.
      </p>

      <CustomChildComponentExample />

      <pre>
        <code className="language-jsx">{`
import React, { useRef } from 'react';

import { Snackbar, SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

function CustomSnackbarComponent(props) {
  return (
    <Snackbar {...props}>
      <h2 style={{margin: 0}}>{props.message}</h2>
    </Snackbar>
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
