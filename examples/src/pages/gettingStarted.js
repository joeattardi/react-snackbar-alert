import React from 'react';

import Layout from '../components/Layout';
import SourceFile from '../components/SourceFile';

import src from '!!raw-loader!../components/examples/base/BaseExample';

export default function GettingStartedPage() {
  return (
    <Layout title="Getting Started">
      <h2>Prerequisites</h2>
      <p>
        This package requires <code>react</code>, <code>react-dom</code>, and{' '}
        <code>styled-components</code> to be installed in your project.
      </p>

      <pre>$ npm install --save react react-dom styled-components</pre>

      <h2>Install the package</h2>
      <pre>$ npm install --save react-snackbar-alert</pre>

      <h2>Add to your app</h2>
      <ul>
        <li>Import the SnackbarManager component</li>
        <li>Import the CSS styles</li>
        <li>
          Add the <code>&lt;SnackbarManager /&gt;</code> to your component and
          save it to a ref
        </li>
        <li>
          Call <code>create</code> on the <code>SnackbarManager</code> ref to
          create notifications
        </li>
      </ul>

      <h2>Example usage</h2>
      <SourceFile src={src} />
    </Layout>
  );
}
