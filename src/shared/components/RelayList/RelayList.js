import React from 'react';
import styles from './RelayList.css';

const RelayList = ({ edges, rowItem: RowItem, loading }) => (
  <div className={styles.root}>
    {edges.map(({ node }) => <RowItem item={node} key={node.id} />)}
    {loading && (
    <div className={styles.loadingOverlay}>
Loading...
    </div>
    )}
  </div>
);

export default RelayList;
