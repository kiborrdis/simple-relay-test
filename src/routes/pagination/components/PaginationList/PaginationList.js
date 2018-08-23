import React from 'react';
import RelayList from 'shared/components/RelayList';
import classNames from 'classnames';
import styles from './PaginationList.css';
import RelayItemContainer from '../../containers/PaginationItemContainer';

const PaginationList = ({ edges, onLoadMore, loading }) => (
  <div className={classNames(styles.root, { [styles['is-loading']]: loading })}>
    <RelayList edges={edges} rowItem={RelayItemContainer} loading={loading} />

    <div className={styles.footer}>
      {onLoadMore && (
      <button type="button" onClick={onLoadMore}>
More
      </button>
      )}
    </div>
  </div>
);

export default PaginationList;
