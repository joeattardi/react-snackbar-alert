import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import customChildComponentExampleSrc from '!!raw-loader!../../components/examples/customChildComponent/CustomChildComponentExample.js';
import customSnackbarComponentSrc from '!!raw-loader!../../components/examples/customChildComponent/CustomSnackbarComponent.js';

import CustomChildComponentExample from '../../components/examples/customChildComponent/CustomChildComponentExample';
import SourceFile from '../../components/SourceFile';

import Layout from '../../components/Layout';

export default function CustomChildComponentPage() {
  return (
    <Layout title="Extending the Snackbar Component">
      <p>
        You can also extend the default <code>Snackbar</code> component. This
        allows you to keep the default styling and animation, but also add your
        own child content to the snackbar.
      </p>

      <p>
        To extend the default component, import the <code>Snackbar</code>{' '}
        component and use it in your custom component. Make sure to pass all
        received props along to the <code>Snackbar</code> component, or else the
        animations won't work.
      </p>

      <CustomChildComponentExample />

      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>CustomChildComponentExample.js</Tab>
          <Tab>CustomSnackbarComponent.js</Tab>
        </TabList>
        <TabPanel>
          <SourceFile src={customChildComponentExampleSrc} />
        </TabPanel>
        <TabPanel>
          <SourceFile src={customSnackbarComponentSrc} />
        </TabPanel>
      </Tabs>
    </Layout>
  );
}
