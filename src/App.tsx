// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Navigation } from './components/Navigation/Navigation';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { PostDetail } from './pages/PostDetail/PostDetail';
import { BrokenComponent } from './components/BrokenComponent';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Navigation />
      <ErrorBoundary key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/test-error" element={<BrokenComponent />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};
