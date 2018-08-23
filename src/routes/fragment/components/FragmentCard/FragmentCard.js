import React from 'react';
import styles from './FragmentCard.css';

const FragmentCard = ({
  card: { company: { companyName, description, companyPosterImage } },
}) => (
  <div className={styles.root}>
    <div className={styles.info}>
      <div className={styles.title}>
        {companyName}
      </div>
      <div>
        {description}
      </div>
    </div>

    <div className={styles.image}>
      <img src={`https://etmdb.com/static/images/${companyPosterImage}`} alt="Company" />
    </div>
  </div>
);

export default FragmentCard;
