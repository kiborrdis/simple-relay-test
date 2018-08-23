import React from 'react';
import HeaderNavigationItem from './HeaderNavigationItem';
import styles from './Header.css';

const Header = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <HeaderNavigationItem label="Refetch" to="/refetch" />
      <HeaderNavigationItem label="Pagination" to="/pagination" />
      <HeaderNavigationItem label="Fragment" to="/fragment" />
    </div>
  </div>
);

export default Header;
