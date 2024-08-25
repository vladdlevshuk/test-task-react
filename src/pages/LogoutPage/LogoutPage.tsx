import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(logoutUser());
    navigate('/');
  }, [dispatch, navigate]);

  return <div>Logging out...</div>;
};

export default LogoutPage;
