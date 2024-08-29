import React from 'react';
import styles from './NotFound.module.scss';

export const NotFound: React.FC = () => {
  return (
    <div className={styles.notfound__container}>
      <h1 className={styles.notfound__title}>404</h1>
      <p className={styles.notfound__message}>Page Not Found</p>
    </div>
  );
};