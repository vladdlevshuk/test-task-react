import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Navigation } from "./components/Navigation/Navigation";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { PostDetail } from "./pages/PostDetail/PostDetail";
import { BrokenComponent } from "./components/BrokenComponent";
import { NotFound } from "./pages/NotFound/NotFound";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles["container-main"]}>
        <ErrorBoundary key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/test-error" element={<BrokenComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </div>
  );
};
