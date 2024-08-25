import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { useFetchUserQuery } from '../../api/userApiSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { extractErrorMessage } from '../../utils/error';
import { RootState } from '../../types';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const { data, error, isFetching } = useFetchUserQuery(username, {
    skip: !username,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFetching) return;

    if (data && data.length > 0) {
      dispatch(setUser(data[0]));
      navigate('/');
    } else if (error) {
      setErrorMessage(extractErrorMessage(error));
    } else {
      setErrorMessage('User not found');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.title}>{isLoggedIn ? 'You are already logged in' : 'Sign In'}</div>
        {!isLoggedIn && (
          <>
            <input
              type="text"
              className={styles.input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
            <button type="submit" className={styles.button} disabled={isFetching}>
              {isFetching ? 'Loading...' : 'Send'}
            </button>
          </>
        )}
      </form>
    </div>
  );
};