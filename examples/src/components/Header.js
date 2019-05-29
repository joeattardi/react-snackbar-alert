import React from 'react';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header id={styles.header}>
      <h1>🍫 React Snackbar Alert</h1>
      <div><a href="https://github.com/joeattardi/react-snackbar-alert"><img src="https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social" /></a></div>
      <div><a href="https://npmjs.com/package/react-snackbar-alert"><img src="https://img.shields.io/npm/v/react-snackbar-alert.svg" /></a></div>
    </header>
  );
}
