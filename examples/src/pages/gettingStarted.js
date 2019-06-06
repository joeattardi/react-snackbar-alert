import React from 'react';

import Layout from '../components/Layout';
import SourceFile from '../components/SourceFile';

import src from '!!raw-loader!../components/examples/base/BaseExample';

export default function GettingStartedPage() {
  return (
    <Layout title="Getting Started">
      <h2>Prerequisites</h2>
      <p>
        React Snackbar Alert uses the Context API and Hooks. This means it
        requires React 16.8.0 or newer.
      </p>

      <p>
        This package requires <code>react</code>, <code>react-dom</code>, and{' '}
        <code>styled-components</code> to be installed in your project.
      </p>

      <pre>$ npm install --save react react-dom styled-components</pre>

      <h2>Install the package</h2>
      <pre>$ npm install --save react-snackbar-alert</pre>

      <h2>Add to your app</h2>
      <ul>
        <li>
          Import the <code>SnackbarProvider</code> component and the{' '}
          <code>wrapComponent</code> helper
        </li>
        <li>
          Wrap your entire application in the <code>SnackbarProvider</code> and
          pass any configuration to it
        </li>
        <li>
          To create snackbars from a component, wrap it via the{' '}
          <code>wrapComponent</code> helper. This will give it a{' '}
          <code>createSnackbar</code> prop.
        </li>
        <li>
          Call <code>createSnackbar</code> to create snackbars
        </li>
      </ul>

      <h2>Example usage</h2>
      <SourceFile src={src} />
    </Layout>
  );
}
