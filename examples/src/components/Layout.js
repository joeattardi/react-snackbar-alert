import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

import styles from './Layout.module.css';

import 'react-tabs/style/react-tabs.css';

export default function Layout({ children, title }) {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div>
      <Helmet>
        <title>{title ? `${title} |` : ''} React Snackbar Alert</title>
      </Helmet>
      <Header />
      <div id={styles.body}>
        <Navigation />
        <main id={styles.main}>
          <div id={styles.contentContainer}>
            <h1>{title}</h1>
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
