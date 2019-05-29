import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import customComponentExampleSrc from '!!raw-loader!../../components/examples/customComponent/CustomComponentExample.js';
import customSnackbarComponentSrc from '!!raw-loader!../../components/examples/customComponent/CustomSnackbarComponent.js';

import CustomComponentExample from '../../components/examples/customComponent/CustomComponentExample';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

export default function CustomComponentPage() {
  return (
    <Layout title="Custom Snackbar Component">
      <p>
        For greater customization of the snackbar component, a custom component can be used.
        Create your custom snackbar component and pass it as the <code>component</code> prop to the <code>SnackbarManager</code>.
        The component will receive a <code>message</code> prop with the message to display.
      </p>

      <p>
        Note that if you use a custom component, you will lose the default animations.
      </p>

      <CustomComponentExample />

      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>CustomComponentExample.js</Tab>
          <Tab>CustomSnackbarComponent.js</Tab>
        </TabList>
        <TabPanel><SourceFile src={customComponentExampleSrc} /></TabPanel>
        <TabPanel><SourceFile src={customSnackbarComponentSrc} /></TabPanel>
      </Tabs>
    </Layout>
  );
}