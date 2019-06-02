import { Link } from 'gatsby';
import React from 'react';

import styles from './Navigation.module.css';

export default function Navigation({ visible }) {
  return (
    <nav id={styles.sidebar} className={visible ? styles.open : styles.closed}>
      <ul>
        <li>
          <Link to="/" activeClassName={styles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/gettingStarted/" activeClassName={styles.active}>
            Getting Started
          </Link>
        </li>
        <li>
          <Link to="/api/" activeClassName={styles.active}>
            API
          </Link>
        </li>
      </ul>
      <h2>Examples</h2>
      <ul>
        <li>
          <Link to="/examples/base/" activeClassName={styles.active}>
            Base
          </Link>
        </li>
        <li>
          <Link to="/examples/position/" activeClassName={styles.active}>
            Position
          </Link>
        </li>
        <li>
          <Link to="/examples/pauseOnHover/" activeClassName={styles.active}>
            Pause on Hover
          </Link>
        </li>
        <li>
          <Link to="/examples/noProgressBar/" activeClassName={styles.active}>
            No Progress Bar
          </Link>
        </li>
        <li>
          <Link to="/examples/dismissable/" activeClassName={styles.active}>
            Dismissable
          </Link>
        </li>
        <li>
          <Link to="/examples/sticky/" activeClassName={styles.active}>
            Sticky
          </Link>
        </li>
        <li>
          <Link to="/examples/customTimeout/" activeClassName={styles.active}>
            Custom Timeout
          </Link>
        </li>
        <li>
          <Link
            to="/examples/customAnimationTimeout/"
            activeClassName={styles.active}
          >
            Custom Animation Timeout
          </Link>
        </li>
        <li>
          <Link to="/examples/customComponent/" activeClassName={styles.active}>
            Custom Snackbar Component
          </Link>
        </li>
        <li>
          <Link
            to="/examples/customChildComponent/"
            activeClassName={styles.active}
          >
            Extending Snackbar Component
          </Link>
        </li>
        <li>
          <Link
            to="/examples/customComponentData/"
            activeClassName={styles.active}
          >
            Custom Component Data
          </Link>
        </li>
      </ul>
    </nav>
  );
}
