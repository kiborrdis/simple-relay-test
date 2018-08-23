import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigationItem.css';

const HeaderNavigationItem = ({ label, to }) => (
  <NavLink activeClassName={styles.active} to={to}>
    <div className={styles.link}>
      {label}
    </div>
  </NavLink>
);

export default HeaderNavigationItem;
