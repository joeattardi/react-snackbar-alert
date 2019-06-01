import React from 'react';

import DemoExample from '../components/examples/demo/DemoExample';

import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Welcome</h1>
      <p>
        React Snackbar Alert is a very simple library for "snackbar" style notifications. 
        It's a quick and lightweight way to let your users know what's going on in your app.
      </p>

      <h1>Demo</h1>
      <DemoExample />

      <h1>Features</h1>
      <ul>
        <li>Easy to use</li>
        <li>Notifications can be restyled and extended</li>
        <li>Arbitrary custom data can be specified to create rich, interactive notifications</li>
        <li>About 6 KB gzipped</li>
      </ul>

      <h1>Requirements</h1>
      <p>
        React Snackbar Alert requires React 16 or newer.
      </p>
    </Layout>
  );
}
