import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LogoutPage from './pages/LogoutPage/LogoutPage';
import Navigation from "./components/Navigation/Navigation";
import styles from './assets/styles/App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Routes>
        <Route path ='/' element={ <HomePage /> } />
        <Route path ='/login' element={ <LoginPage /> } />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
