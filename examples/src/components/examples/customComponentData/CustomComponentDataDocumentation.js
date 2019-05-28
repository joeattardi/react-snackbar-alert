import React from 'react';
import escape from 'escape-html';

import src from '!!raw-loader!./CustomComponentDataExample.js';
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
        <code className="language-jsx" dangerouslySetInnerHTML={{__html: escape(src)}}></code>
      </pre>
    </section>
  );
}
