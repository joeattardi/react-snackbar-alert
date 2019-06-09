import React from 'react';

import Layout from '../../components/Layout';
import PauseOnHoverExample from '../../components/examples/pauseOnHover/PauseOnHoverExample';

import src from '!!raw-loader!../../components/examples/pauseOnHover/PauseOnHoverExample.js';

import SourceFile from '../../components/SourceFile';

export default function PauseOnHoverPage() {
  return (
    <Layout title="Pause on Hover">
      <p>
        Pause on Hover will pause a snackbar's timeout when the mouse is hovered
        over it. This is disabled by default. It can be enabled in one of two
        ways:
      </p>

      <ul>
        <li>
          Setting the <code>pauseOnHover</code> prop on the{' '}
          <code>SnackbarProvider</code> for all snackbars
        </li>
        <li>
          Setting the <code>pauseOnHover</code> property on the object passed to{' '}
          <code>createSnackbar</code> for a specific snackbar
        </li>
      </ul>

      <PauseOnHoverExample />

      <SourceFile src={src} />
    </Layout>
  );
}
