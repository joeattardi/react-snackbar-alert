import React from 'react';

import Layout from '../../components/Layout';
import BaseExample from '../../components/examples/base/BaseExample';

import src from '!!raw-loader!../../components/examples/base/BaseExample.js';

import SourceFile from '../../components/SourceFile';

export default function BasePage() {
  return (
    <Layout title="Base">
      <p>The default timeout is 3 seconds.</p>

      <BaseExample />

      <SourceFile src={src} />
    </Layout>
  );
}
