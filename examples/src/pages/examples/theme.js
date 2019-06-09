import React from 'react';

import Layout from '../../components/Layout';
import ThemeExample from '../../components/examples/theme/ThemeExample';

import src from '!!raw-loader!../../components/examples/theme/ThemeExample.js';

import SourceFile from '../../components/SourceFile';

export default function ThemePage() {
  return (
    <Layout title="Themes">
      <p>
        By default, snackbars have a black background and no icon. This can be
        changed by specifying the <code>theme</code> property on the object
        passed to <code>createSnackbar</code>.
      </p>

      <p>The supported themes are:</p>

      <ul>
        <li>default</li>
        <li>info</li>
        <li>success</li>
        <li>warning</li>
        <li>error</li>
      </ul>

      <ThemeExample />

      <SourceFile src={src} />
    </Layout>
  );
}
