import React from 'react';
import styles from './Spinner.module.css';

const Spinner: React.FC = () => {
  return (
    <div className={styles['spinner-overlay']}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
