import React from 'react';

import CustomTimeoutExample from './CustomTimeoutExample';

export default function CustomTimeoutDocumentation() {
  return (
    <section>
      <h3>Custom Timeout</h3>
      <p>The timeout can be changed by setting the `timeout` property of the passed snackbar object.</p>

      <CustomTimeoutExample />
            
      <pre>
        <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function CustomTimeoutExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: '5 second timeout!',
      timeout: 5000
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
  )
}
