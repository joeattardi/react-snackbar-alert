import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import customComponentExampleSrc from '!!raw-loader!./CustomComponentExample.js';
import customSnackbarComponentSrc from '!!raw-loader!./CustomSnackbarComponent.js';

import CustomComponentExample from './CustomComponentExample';
import SourceFile from '../../SourceFile';

export default function CustomComponentDocumentation() {
  return (
    <section>
      <h3>Custom Snackbar Component</h3>
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
    </section>
  );
}
