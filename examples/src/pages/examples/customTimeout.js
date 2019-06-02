import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import CustomTimeoutExample from '../../components/examples/customTimeout/CustomTimeoutExample';

import src from '!!raw-loader!../../components/examples/customTimeout/CustomTimeoutExample.js';

export default function CustomTimeoutPage() {
  return (
    <Layout title="Custom Timeout">
      <p>
        By default, a snackbar is removed after 3 seconds. A custom timeout can
        be specified in one of two ways:
      </p>

      <ul>
        <li>
          Setting the <code>timeout</code> prop on the{' '}
          <code>SnackbarManager</code> for all snackbars
        </li>
        <li>
          Setting the <code>timeout</code> property on the passed snackbar
          object for a specific snackbar
        </li>
      </ul>

      <CustomTimeoutExample />
      <SourceFile src={src} />
    </Layout>
  );
}
