import React from 'react';
import escape from 'escape-html';

import src from '!!raw-loader!./CustomTimeoutExample.js';
import CustomTimeoutExample from './CustomTimeoutExample';

export default function CustomTimeoutDocumentation() {
  return (
    <section>
      <h3>Custom Timeout</h3>
      <p>The timeout can be changed by setting the `timeout` property of the passed snackbar object.</p>

      <CustomTimeoutExample />
            
      <pre>
        <code className="language-jsx" dangerouslySetInnerHTML={{__html: escape(src)}}></code>
      </pre>
    </section>
  )
}
