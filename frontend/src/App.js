// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage.js';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard.js';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/signup" element={<RegistrationPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  </Router>
);

export default App;
