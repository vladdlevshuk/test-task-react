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

  const isButtonDisabled = isFetching || !!error;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isButtonDisabled) return;

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
    <div className={styles['login__container']}>
      <form className={styles['login__form']} onSubmit={handleSubmit}>
        <div className={styles['login__title']}>
          {isLoggedIn ? 'You are already logged in' : 'Sign In'}
        </div>
        {!isLoggedIn && (
          <>
            <input
              type="text"
              className={styles['login__input']}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errorMessage && <div className={styles['login__error-message']}>{errorMessage}</div>}
            <button
              type="submit"
              className={styles['login__button']}
              disabled={isButtonDisabled}
            >
              {isFetching ? 'Loading...' : 'Send'}
            </button>
          </>
        )}
      </form>
    </div>
  );
};
