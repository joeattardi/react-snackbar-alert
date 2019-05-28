import React from 'react';

import src from '!!raw-loader!./CustomTimeoutExample.js';
import CustomTimeoutExample from './CustomTimeoutExample';
import SourceFile from '../../SourceFile';

export default function CustomTimeoutDocumentation() {
  return (
    <section>
      <h3>Custom Timeout</h3>
      <p>The timeout can be changed by setting the `timeout` property of the passed snackbar object.</p>

      <CustomTimeoutExample />
      <SourceFile src={src} />
    </section>
  )
}
