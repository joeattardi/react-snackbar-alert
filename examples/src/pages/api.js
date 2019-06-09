import React from 'react';

import Layout from '../components/Layout';

import styles from './api.module.css';

export default function ApiPage() {
  return (
    <Layout title="API">
      <h2>
        <code>SnackbarProvider</code> Component
      </h2>
      <h3>Props</h3>
      <p>
        Unless otherwise noted, any of these props can be overridden for a
        specific snackbar instance by adding that same property to the object
        passed to <code>createSnackbar</code>.
      </p>
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
            <td>
              <code>animationTimeout</code>
            </td>
            <td>number</td>
            <td>
              <code>500</code>
            </td>
            <td>
              The duration of the show and hide animations, in milliseconds
            </td>
          </tr>
          <tr>
            <td>
              <code>component</code>
            </td>
            <td>React component type</td>
            <td>
              <code>Snackbar</code> component
            </td>
            <td>
              The component type to use for rendering the snackbar.{' '}
              <strong>Cannot be overridden for an individual snackbar.</strong>
            </td>
          </tr>
          <tr>
            <td>
              <code>dismissable</code>
            </td>
            <td>boolean</td>
            <td>
              <code>false</code>
            </td>
            <td>
              Whether or not created snackbars can be manually dismissed by the
              user
            </td>
          </tr>
          <tr>
            <td>
              <code>pauseOnHover</code>
            </td>
            <td>boolean</td>
            <td>
              <code>false</code>
            </td>
            <td>
              Whether or not to pause a snackbar's timeout when the mouse is
              hovered over it
            </td>
          </tr>
          <tr>
            <td>
              <code>position</code>
            </td>
            <td>
              One of:
              <ul>
                <li>
                  <code>'top'</code>
                </li>
                <li>
                  <code>'top-left'</code>
                </li>
                <li>
                  <code>'top-right'</code>
                </li>
                <li>
                  <code>'bottom'</code>
                </li>
                <li>
                  <code>'bottom-left'</code>
                </li>
                <li>
                  <code>'bottom-right'</code>
                </li>
              </ul>
            </td>
            <td>
              <code>'bottom'</code>
            </td>
            <td>
              The position on screen to show the snackbars.{' '}
              <strong>Cannot be overridden for an individual snackbar.</strong>
            </td>
          </tr>
          <tr>
            <td>
              <code>progressBar</code>
            </td>
            <td>boolean</td>
            <td>
              <code>true</code>
            </td>
            <td>
              Whether or not to show an animated progress bar indicating the
              time before a snackbar is removed
            </td>
          </tr>
          <tr>
            <td>
              <code>sticky</code>
            </td>
            <td>boolean</td>
            <td>
              <code>false</code>
            </td>
            <td>Whether or not the snackbars should be sticky</td>
          </tr>
          <tr>
            <td>
              <code>timeout</code>
            </td>
            <td>number</td>
            <td>
              <code>3000</code>
            </td>
            <td>
              The time before a snackbar is automatically removed, in
              milliseconds
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Context</h3>
      <code>createSnackbar(snackbar: SnackbarData)</code>
      <p>Creates and shows a snackbar notification.</p>
      <h3>
        <code>SnackbarData</code> type
      </h3>
      When a value is specified for a given property in both the{' '}
      <code>SnackbarManager</code> component and a <code>SnackbarData</code>{' '}
      item, the value in the <code>SnackbarData</code> takes precedence.
      Otherwise, it will default to the corresponding setting in the{' '}
      <code>SnackbarManager</code> if not specified.
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
            <td>
              <code>animationTimeout</code>
            </td>
            <td>number</td>
            <td>
              The duration of the show and hide animations, in milliseconds
            </td>
          </tr>
          <tr>
            <td>
              <code>data</code>
            </td>
            <td>object</td>
            <td>
              Custom data that can be used with a custom snackbar component
            </td>
          </tr>
          <tr>
            <td>
              <code>dismissable</code>
            </td>
            <td>boolean</td>
            <td>
              Whether or not this snackbar can be manually dismissed by the user
            </td>
          </tr>
          <tr>
            <td>
              <code>message</code> (Required)
            </td>
            <td>string</td>
            <td>The message to display</td>
          </tr>
          <tr>
            <td>
              <code>pauseOnHover</code>
            </td>
            <td>boolean</td>
            <td>
              Whether or not to pause this snackbar's timeout when it is hovered
              over
            </td>
          </tr>
          <tr>
            <td>
              <code>progressBar</code>
            </td>
            <td>boolean</td>
            <td>Whether or not to show the progress bar for this snackbar</td>
          </tr>
          <tr>
            <td>
              <code>sticky</code>
            </td>
            <td>boolean</td>
            <td>
              Whether or not this snackbar should be sticky. Sticky snackbars
              are not automatically removed.
            </td>
          </tr>
          <tr>
            <td>
              <code>theme</code>
            </td>
            <td>
              One of:
              <ul>
                <li>
                  <code>'default'</code>
                </li>
                <li>
                  <code>'info'</code>
                </li>
                <li>
                  <code>'success'</code>
                </li>
                <li>
                  <code>'warning'</code>
                </li>
                <li>
                  <code>'error'</code>
                </li>
              </ul>
            </td>
            <td>
              The theme to use for this snackbar. Default is{' '}
              <code>'default'</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>timeout</code>
            </td>
            <td>number</td>
            <td>
              The time before this snackbar is automatically removed, in
              milliseconds
            </td>
          </tr>
        </tbody>
      </table>
      <h2>
        <code>wrapComponent</code> helper
      </h2>
      <p>
        This helper function wraps the passed component, adding the{' '}
        <code>createSnackbar</code> function prop to the wrapped component.
      </p>
    </Layout>
  );
}
