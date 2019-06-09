import React from 'react';

import Layout from '../../components/Layout';
import NoProgressBarExample from '../../components/examples/noProgressBar/NoProgressBarExample';

import src from '!!raw-loader!../../components/examples/noProgressBar/NoProgressBarExample.js';

import SourceFile from '../../components/SourceFile';

export default function BasePage() {
  return (
    <Layout title="No Progress Bar">
      <p>
        By default, a progress bar is shown to indicate the time before the
        snackbar is removed. This can be done in one of two ways:
      </p>

      <ul>
        <li>
          Setting the <code>progressBar</code> prop on the{' '}
          <code>SnackbarProvider</code> to <code>false</code> to disable for all
          snackbars
        </li>
        <li>
          Setting the <code>progressBar</code> property on the object passed to{' '}
          <code>createSnackbar</code> to <code>false</code> to disable for a
          specific snackbar
        </li>
      </ul>

      <NoProgressBarExample />

      <SourceFile src={src} />
    </Layout>
  );
}
