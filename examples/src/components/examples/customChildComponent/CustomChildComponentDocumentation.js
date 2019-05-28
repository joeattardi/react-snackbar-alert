import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import customChildComponentExampleSrc from '!!raw-loader!./CustomChildComponentExample.js';
import customSnackbarComponentSrc from '!!raw-loader!./CustomSnackbarComponent.js';

import CustomChildComponentExample from './CustomChildComponentExample';
import SourceFile from '../../SourceFile';

export default function CustomChildComponentDocumentation() {
  return (
    <section>
      <h3>Extending the Snackbar Component</h3>

      <p>
        You can also extend the default <code>Snackbar</code> component.
        This allows you to keep the default styling and animation, but also add your own child content to the snackbar.
      </p>

      <p>
        To extend the default component, import the <code>Snackbar</code> component and use it in your custom component.
        Make sure to pass all received props along to the <code>Snackbar</code> component, or else the animations won't work.
      </p>

      <CustomChildComponentExample />

      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>CustomChildComponentExample.js</Tab>
          <Tab>CustomSnackbarComponent.js</Tab>
        </TabList>
        <TabPanel><SourceFile src={customChildComponentExampleSrc} /></TabPanel>
        <TabPanel><SourceFile src={customSnackbarComponentSrc} /></TabPanel>
      </Tabs>
    </section>
  );
}
