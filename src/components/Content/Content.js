import React from 'react';
import styles from './Content.css';

const Content = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default Content;
