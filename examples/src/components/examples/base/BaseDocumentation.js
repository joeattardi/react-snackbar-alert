import React from 'react';

import BaseExample from './BaseExample';

export default function BaseDocumentation() {
  return (
    <section>
      <h3>Base</h3>

      <p>
        The default timeout is 3 seconds.
      </p>

      <BaseExample />

      <pre>
        <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function BaseExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  } 

  return (
    <div>
      <SnackbarManager ref={snackbarManager} />
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
