import React from 'react';

import CustomAnimationTimeoutExample from './CustomAnimationTimeoutExample';

export default function CustomAnimationTimeoutDocumentation() {
  return (
    <section>
      <h3>Custom Animation Timeout</h3>
        <p>
          The snackbars are displayed with a simple animation. The duration of this animation can be changed in two ways:
        </p>

        <ul>
          <li>Specifying the <code>animationTimeout</code> prop on the <code>SnackbarManager</code> component.</li>
          <li>Specifying the <code>animationTimeout</code> property on the passed snackbar object.</li>
        </ul>

        <CustomAnimationTimeoutExample />
            
        <pre>
          <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function CustomAnimationTimeoutExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Custom animation timeout!'
    });
  } 

  return (
    <div>
      <SnackbarManager animationTimeout={1000} ref={snackbarManager} />
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
