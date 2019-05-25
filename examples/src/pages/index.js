import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

import styles from './index.module.css';

const baseSnackbar = {
  message: 'Hello Snackbar!'
};

const customTimeoutSnackbar = {
  message: '5 second timeout!',
  timeout: 5000
};

const customAnimationTimeoutSnackbar = {
  message: 'Custom animation timeout!',
  animationTimeout: 1000
};

export default function IndexPage() {
  useEffect(() => {
    Prism.highlightAll();
  });

  const snackbarManager = useRef(null);

  function showSnackbar(snackbar) {
    snackbarManager.current.create(snackbar);
  }

  return (
    <div>
      <Helmet>
        <title>React Snackbar Alert</title>
      </Helmet>
      <SnackbarManager ref={snackbarManager} />
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

          <h3>Base</h3>
          <div className={styles.example}>
            <p>The default timeout is 3 seconds.</p>

            <div>
              <button onClick={() => showSnackbar({...baseSnackbar})}>Show Snackbar</button>
            </div>

            <pre>
              <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function SnackbarExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  } 

  return (
    <div>
      <SnackbarManager ref={snackbarManager} />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
            `}</code></pre>
          </div>

          <h3>Custom Timeout</h3>
          <div className={styles.example}>
            <p>The timeout can be changed by setting the `timeout` property of the passed snackbar object.</p>

            <div>
              <button onClick={() => showSnackbar({...customTimeoutSnackbar})}>Show Snackbar</button>
            </div>
            
            <pre>
              <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function SnackbarExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: '5 second timeout!',
      timeout: 5000
    });
  } 

  return (
    <div>
      <SnackbarManager ref={snackbarManager} />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
              `}</code>
            </pre>
          </div>

          <h3>Custom Animation Timeout</h3>
          <div className={styles.example}>
            <p>
              The snackbars are displayed with a simple animation. The duration of this animation can be changed in two ways:
            </p>
            <ul>
              <li>Specifying the <code>animationTimeout</code> prop on the <code>SnackbarManager</code> component.</li>
              <li>Specifying the <code>animationTimeout</code> property on the passed snackbar object.</li>
            </ul>

            <div>
              <button onClick={() => showSnackbar({...customAnimationTimeoutSnackbar})}>Show Snackbar</button>
            </div>
            
            <pre>
              <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function SnackbarExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Custom animation timeout!'
    });
  } 

  return (
    <div>
      <SnackbarManager animationTimeout={1000} ref={snackbarManager} />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
              `}</code>
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}
