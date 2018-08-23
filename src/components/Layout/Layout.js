import React from 'react';
import Header from '../Header';
import Content from '../Content';
import styles from './Layout.css';

const Layout = ({ children }) => (
  <div className={styles.root}>
    <Header />
    <Content>
      {children}
    </Content>
  </div>
);

export default Layout;
