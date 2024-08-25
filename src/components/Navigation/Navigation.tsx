import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.title}>Best Application</Link>
        {isLoggedIn ? (
          <Link to="/logout" className={styles.button}>Log Out</Link>
        ) : (
          <Link to="/login" className={styles.button}>Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Navigation;
