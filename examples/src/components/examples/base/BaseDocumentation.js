import React from 'react';

import src from '!!raw-loader!./BaseExample.js';
import BaseExample from './BaseExample';
import SourceFile from '../../SourceFile';

export default function BaseDocumentation() {
  return (
    <section>
      <h3>Base</h3>

      <p>
        The default timeout is 3 seconds.
      </p>

      <BaseExample />

      <SourceFile src={src} />
    </section>
  );
}
