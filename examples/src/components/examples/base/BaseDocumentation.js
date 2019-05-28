import React from 'react';
import escape from 'escape-html';

import src from '!!raw-loader!./BaseExample.js';
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
        <code className="language-jsx" dangerouslySetInnerHTML={{__html: escape(src)}}></code>
      </pre>
    </section>
  );
}
