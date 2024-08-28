import React from 'react';
import styles from './Spinner.module.scss';

export const Spinner: React.FC = () => {
  return (
    <div className={styles['spinner__overlay']}>
      <div className={styles['spinner__element']}></div>
    </div>
  );
};
