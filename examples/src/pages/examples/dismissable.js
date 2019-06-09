import React from 'react';

import Layout from '../../components/Layout';
import DismissableExample from '../../components/examples/dismissable/DismissableExample';

import src from '!!raw-loader!../../components/examples/dismissable/DismissableExample.js';

import SourceFile from '../../components/SourceFile';

export default function BasePage() {
  return (
    <Layout title="Dismissable">
      <p>
        Snackbar notifications will automatically disappear after the timeout
        has passed. They can also, however, be configured so that they can be
        manually dismissed before the timeout passes. This can be done in one of
        two ways:
      </p>

      <ul>
        <li>
          Setting the <code>dismissable</code> prop on the{' '}
          <code>SnackbarProvider</code> (to make all snackbars dismissable)
        </li>
        <li>
          Setting the <code>dismissable</code> property on the object passed to{' '}
          <code>createSnackbar</code> (to make only that snackbar dismissable)
        </li>
      </ul>

      <DismissableExample />

      <SourceFile src={src} />
    </Layout>
  );
}
