import React from 'react';

import Layout from '../components/Layout';

import styles from './api.module.css';

export default function ApiPage() {
  return (
    <Layout title="API">
      <h2><code>SnackbarManager</code> Component</h2>
      <h3>Props</h3>
      <table className={styles.api}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animationTimeout</td>
            <td>number</td>
            <td>500</td>
            <td>The duration of the show and hide animations, in milliseconds</td>
          </tr>
          <tr>
            <td>component</td>
            <td>React component type</td>
            <td><code>Snackbar</code> component</td>
            <td>The component type to use for rendering the snackbar</td>
          </tr>
          <tr>
            <td>dismissable</td>
            <td>boolean</td>
            <td>false</td>
            <td>Whether or not created snackbars can be manually dismissed by the user</td>
          </tr>
          <tr>
            <td>timeout</td>
            <td>number</td>
            <td>3000</td>
            <td>The time before a snackbar is automatically removed, in milliseconds</td>
          </tr>
        </tbody>
      </table>

      <h3>Methods</h3>

      <code>create(snackbar: SnackbarData)</code>

      <p>Creates and shows a snackbar notification.</p>

      <h3><code>SnackbarData</code> type</h3>

      When a value is specified for a given property in both the <code>SnackbarManager</code> component
      and a <code>SnackbarData</code> item, the value in the <code>SnackbarData</code> takes precedence.
      Otherwise, it will default to the corresponding setting in the <code>SnackbarManager</code> if not
      specified.

      <table className={styles.api}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>animationTimeout</td>
            <td>number</td>
            <td>The duration of the show and hide animations, in milliseconds</td>
          </tr>
          <tr>
            <td>data</td>
            <td>object</td>
            <td>Custom data that can be used with a custom snackbar component</td>
          </tr>
          <tr>
            <td>dismissable</td>
            <td>boolean</td>
            <td>Whether or not this snackbar can be manually dismissed by the user</td>
          </tr>
          <tr>
            <td>message (Required)</td>
            <td>string</td>
            <td>The message to display</td>
          </tr>
          <tr>
            <td>timeout</td>
            <td>number</td>
            <td>The time before this snackbar is automatically removed, in milliseconds</td>
          </tr>
        </tbody>
      </table>

    </Layout>
  );
}