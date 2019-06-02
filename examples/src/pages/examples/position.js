import React from 'react';

import Layout from '../../components/Layout';
import TopExample from '../../components/examples/top/TopExample';

import src from '!!raw-loader!../../components/examples/top/TopExample.js';

import SourceFile from '../../components/SourceFile';

export default function PositionPage() {
  return (
    <Layout title="Position">
      <p>
        By default, snackbars appear at the bottom center of the screen. This
        can be changed via the <code>position</code> prop on the
        <code>SnackbarManager</code>. Value values are:
      </p>

      <ul>
        <li>top</li>
        <li>top-left</li>
        <li>top-right</li>
        <li>bottom</li>
        <li>bottom-left</li>
        <li>bottom-right</li>
      </ul>

      <TopExample />

      <SourceFile src={src} />
    </Layout>
  );
}
