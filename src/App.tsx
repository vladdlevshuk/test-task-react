// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Navigation } from './components/Navigation/Navigation';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const location = useLocation();
  const key = location.pathname;

  return (
    <div className={styles.container}>
      <Navigation />
      <ErrorBoundary key={key}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};
