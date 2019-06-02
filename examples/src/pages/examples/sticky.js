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
        removed.
      </p>

      <p>
        It is recommended that sticky snackbars are also user-dismissable,
        otherwise the snackbar can never be removed.
      </p>

      <StickyExample />

      <SourceFile src={src} />
    </Layout>
  );
}
