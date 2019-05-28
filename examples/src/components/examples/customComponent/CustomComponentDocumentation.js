import React from 'react';
import escape from 'escape-html';

import src from '!!raw-loader!./CustomComponentExample.js';
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
          <code className="language-jsx" dangerouslySetInnerHTML={{__html: escape(src)}}></code>
      </pre>
    </section>
  );
}
