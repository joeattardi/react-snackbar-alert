import React from 'react';

import Layout from '../../components/Layout';
import StickyExample from '../../components/examples/sticky/StickyExample';

import src from '!!raw-loader!../../components/examples/sticky/StickyExample.js';

import SourceFile from '../../components/SourceFile';

export default function StickyPage() {
  return (
    <Layout title="Sticky Snackbars">
      <p>
        A snackbar can be sticky, which means that it is not automatically
        removed. This can be done in one of two ways:
      </p>

      <ul>
        <li>
          Setting the <code>sticky</code> prop on the{' '}
          <code>SnackbarProvider</code> to make all snackbars sticky
        </li>
        <li>
          Setting the <code>sticky</code> property on the object passed to{' '}
          <code>createSnackbar</code> to make a specific snackbar sticky
        </li>
      </ul>

      <p>
        It is recommended that sticky snackbars are also user-dismissable,
        otherwise the snackbar can never be removed.
      </p>

      <StickyExample />

      <SourceFile src={src} />
    </Layout>
  );
}
