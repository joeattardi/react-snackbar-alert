import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

import BaseExample from '../components/examples/BaseExample';
import CustomAnimationTimeoutExample from '../components/examples/CustomAnimationTimeoutExample';
import CustomChildComponentExample from '../components/examples/CustomChildComponentExample';
import CustomComponentExample from '../components/examples/CustomComponentExample';
import CustomTimeoutExample from '../components/examples/CustomTimeoutExample';

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

          <h3>Base</h3>
          <div className={styles.example}>
            <p>The default timeout is 3 seconds.</p>

            <div>
              <BaseExample />
            </div>

            <pre>
              <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function BaseExample() {
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
              <CustomTimeoutExample />
            </div>
            
            <pre>
              <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function CustomTimeoutExample() {
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
              <CustomAnimationTimeoutExample />
            </div>
            
            <pre>
              <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default function CustomAnimationTimeoutExample() {
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

          <h3>Custom Snackbar Component</h3>
          <div className={styles.example}>
            <p>
              For greater customization of the snackbar component, a custom component can be used.
              Create your custom snackbar component and pass it as the <code>component</code> prop to the <code>SnackbarManager</code>.
              The component will receive a <code>message</code> prop with the message to display.
            </p>

            <p>
              Note that if you use a custom component, you will lose the default animations.
            </p>

            <CustomComponentExample />

            <pre>
              <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

function CustomSnackbarComponent({ message }) {
  return (
    <div style={{
      background: '#FF0000',
      color: '#FFFFFF',
      padding: '0.5em',
      marginBottom: '0.5em'
    }}>
      {message}
    </div>
  );
}

export default function CustomComponentExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  } 

  return (
    <div>
      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
              `}</code>
            </pre>

            <p>
              You can also extend the default <code>Snackbar</code> component.
              This allows you to keep the default styling and animation, but also add your own child content to the snackbar.
            </p>

            <p>
              To extend the default component, import the <code>Snackbar</code> component and use it in your custom component.
              Make sure to pass all received props along to the <code>Snackbar</code> component, or else the animations won't work.
            </p>

            <CustomChildComponentExample />

            <pre>
              <code className="language-jsx">{`
import React, { useRef } from 'react';

import { Snackbar, SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

function CustomSnackbarComponent(props) {
  return (
    <Snackbar {...props}>
      <h2 style={{margin: 0}}>{props.message}</h2>
    </Snackbar>
  );
}

export default function CustomComponentExample() {
  const snackbarManager = useRef(null);

  function showSnackbar() {
    snackbarManager.current.create({
      message: 'Hello Snackbar!'
    });
  } 

  return (
    <div>
      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />
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
