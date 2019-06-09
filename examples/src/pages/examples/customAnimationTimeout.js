import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import CustomAnimationTimeoutExample from '../../components/examples/customAnimationTimeout/CustomAnimationTimeoutExample';

import src from '!!raw-loader!../../components/examples/customAnimationTimeout/CustomAnimationTimeoutExample.js';

export default function CustomAnimationTimeoutPage() {
  return (
    <Layout title="Custom Animation Timeout">
      <p>
        The snackbars are displayed with a simple animation. The duration of
        this animation can be changed in two ways:
      </p>

      <ul>
        <li>
          Specifying the <code>animationTimeout</code> prop on the{' '}
          <code>SnackbarProvider</code> component.
        </li>
        <li>
          Specifying the <code>animationTimeout</code> property on the object
          passed to <code>createSnackbar</code>
        </li>
      </ul>

      <CustomAnimationTimeoutExample />
      <SourceFile src={src} />
    </Layout>
  );
}
