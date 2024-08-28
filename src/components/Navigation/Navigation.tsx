import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logoutUser } from '../../store/userSlice';
import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles['navigation__container']}>
        <Link to="/" className={styles['navigation__title']}>Best Application</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className={styles['navigation__button']}>Log Out</button>
        ) : (
          <Link to="/login" className={styles['navigation__button']}>Sign In</Link>
        )}
      </div>
    </nav>
  );
};
