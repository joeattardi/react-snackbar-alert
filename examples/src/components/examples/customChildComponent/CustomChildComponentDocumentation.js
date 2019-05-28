import React from 'react';
import escape from 'escape-html';

import src from '!!raw-loader!./CustomChildComponentExample.js';
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
        <code className="language-jsx" dangerouslySetInnerHTML={{__html: escape(src)}}></code>
      </pre>
    </section>
  );
}
