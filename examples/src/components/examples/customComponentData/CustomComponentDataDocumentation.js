import React from 'react';

import CustomComponentDataExample from './CustomComponentDataExample';

export default function CustomComponentDataDocumentation() {
  return (
    <section>
      <h3>Passing Custom Data to a Custom Component</h3>

      <p>
        You can also create more rich snackbar notifications by passing arbitrary data
        that can be used when rendering a custom snackbar component.
      </p>

      <p>
        Simply pass a <code>data</code> property in the snackbar object passed to <code>SnackbarManager.create</code>,
        then reference the data attributes in your custom component's <code>render</code> function.
      </p>

      <CustomComponentDataExample />

      <pre>
        <code className="language-jsx">{`
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
        `}</code>
      </pre>
    </section>
  );
}
