import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import customComponentDataExampleSrc from '!!raw-loader!../../components/examples/customComponentData/CustomComponentDataExample.js';
import customSnackbarComponentSrc from '!!raw-loader!../../components/examples/customComponentData/CustomSnackbarComponent.js';

import CustomComponentDataExample from '../../components/examples/customComponentData/CustomComponentDataExample';
import SourceFile from '../../components/SourceFile';

import Layout from '../../components/Layout';

export default function CustomComponentDataDocumentation() {
  return (
    <Layout title="Passing Custom Data to a Custom Component">
      <p>
        You can also create more rich snackbar notifications by passing
        arbitrary data that can be used when rendering a custom snackbar
        component.
      </p>

      <p>
        Simply pass a <code>data</code> property in the snackbar object passed
        to <code>SnackbarManager.create</code>, then reference the data
        attributes in your custom component's <code>render</code> function.
      </p>

      <CustomComponentDataExample />

      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>CustomComponentDataExample.js</Tab>
          <Tab>CustomSnackbarComponent.js</Tab>
        </TabList>
        <TabPanel>
          <SourceFile src={customComponentDataExampleSrc} />
        </TabPanel>
        <TabPanel>
          <SourceFile src={customSnackbarComponentSrc} />
        </TabPanel>
      </Tabs>
    </Layout>
  );
}
