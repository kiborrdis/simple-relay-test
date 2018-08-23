import React from 'react';
import RelayList from 'shared/components/RelayList';
import classNames from 'classnames';
import styles from './RefetchList.css';
import RelayItemContainer from '../../containers/RefetchItemContainer';

const RefetchList = ({
  edges, onNextClick, onPrevClick, loading,
}) => (
  <div className={classNames(styles.root, { [styles['is-loading']]: loading })}>
    <RelayList edges={edges} rowItem={RelayItemContainer} loading={loading} />

    <div className={styles.footer}>
      {onPrevClick && (
      <button type="button" onClick={onPrevClick}>
Prev
      </button>
      )}
      {onNextClick && (
      <button type="button" onClick={onNextClick}>
Next
      </button>
      )}
    </div>
  </div>
);

export default RefetchList;
