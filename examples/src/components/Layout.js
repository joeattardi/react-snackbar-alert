import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';
import React, { useEffect, useState } from 'react';
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

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div>
      <Helmet>
        <title>{title ? `${title} |` : ''} React Snackbar Alert</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Helmet>
      <Header onMenuToggle={() => setMenuVisible(!menuVisible)} />
      <div id={styles.body}>
        <Navigation visible={menuVisible} />
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
