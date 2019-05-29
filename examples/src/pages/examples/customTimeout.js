import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import CustomTimeoutExample from '../../components/examples/customTimeout/CustomTimeoutExample';

import src from '!!raw-loader!../../components/examples/customTimeout/CustomTimeoutExample.js';

export default function CustomTimeoutPage() {
  return (
    <Layout title="Custom Timeout">
      <p>The timeout can be changed by setting the <code>timeout</code> property of the passed snackbar object.</p>

      <CustomTimeoutExample />
      <SourceFile src={src} />
    </Layout>
  )
}