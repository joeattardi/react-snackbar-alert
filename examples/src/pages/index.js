import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import 'react-snackbar-alert/styles/react-snackbar-alert.css';

import {
  BaseDocumentation,
  CustomAnimationTimeoutDocumentation,
  CustomChildComponentDocumentation,
  CustomComponentDataDocumentation,
  CustomComponentDocumentation,
  CustomTimeoutDocumentation
} from '../components/examples';

import styles from './index.module.css';

export default function IndexPage() {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div>
      <Helmet>
        <title>React Snackbar Alert</title>
      </Helmet>
      <header id={styles.header}>
        <h1>React Snackbar Alert</h1>
        <div><a href="https://github.com/joeattardi/react-snackbar-alert"><img src="https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social" /></a></div>
        <div><a href="https://npmjs.com/package/react-snackbar-alert"><img src="https://img.shields.io/npm/v/react-snackbar-alert.svg" /></a></div>
      </header>
      <main id={styles.main}>
        <div>
          <p>
            React Snackbar Alert is a very simple library for "snackbar" style notifications. Snackbars appear at the bottom of the viewport, and multiple snackbars can be stacked.
          </p>
        </div>
        <div id={styles.exampleCode}>
          <h2>Code Examples</h2>

          <BaseDocumentation />
          <CustomTimeoutDocumentation />
          <CustomAnimationTimeoutDocumentation />
          <CustomComponentDocumentation />
          <CustomChildComponentDocumentation />
          <CustomComponentDataDocumentation />
        </div>
      </main>
    </div>
  );
}
