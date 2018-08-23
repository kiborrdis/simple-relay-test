import React from 'react';
import styles from './ListItem.css';

const ListItem = ({ data = [] }) => (
  <div className={styles.root}>
    {data.map(value => (
      <div className={styles.column} key={value}>
        {value || '-'}
      </div>
    ))}
  </div>
);

export default ListItem;
