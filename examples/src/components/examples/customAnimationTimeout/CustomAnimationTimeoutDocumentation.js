import React from 'react';
import escape from 'escape-html';

import src from '!!raw-loader!./CustomAnimationTimeoutExample.js';
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
          <code className="language-jsx" dangerouslySetInnerHTML={{__html: escape(src)}}></code>
      </pre>
    </section>
  );
}
