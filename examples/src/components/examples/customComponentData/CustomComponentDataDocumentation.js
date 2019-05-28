import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import customComponentDataExampleSrc from '!!raw-loader!./CustomComponentDataExample.js';
import customSnackbarComponentSrc from '!!raw-loader!./CustomSnackbarComponent.js';

import CustomComponentDataExample from './CustomComponentDataExample';
import SourceFile from '../../SourceFile';

export default function CustomComponentDataDocumentation() {
  return (
    <section>
      <h3>Passing Custom Data to a Custom Component</h3>

      <p>
        You can also create more rich snackbar notifications by passing arbitrary data
        that can be used when rendering a custom snackbar component.
      </p>

      <p>
        Simply pass a <code>data</code> property in the snackbar object passed to <code>SnackbarManager.create</code>,
        then reference the data attributes in your custom component's <code>render</code> function.
      </p>

      <CustomComponentDataExample />

      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>CustomComponentDataExample.js</Tab>
          <Tab>CustomSnackbarComponent.js</Tab>
        </TabList>
        <TabPanel><SourceFile src={customComponentDataExampleSrc} /></TabPanel>
        <TabPanel><SourceFile src={customSnackbarComponentSrc} /></TabPanel>
      </Tabs>
    </section>
  );
}
