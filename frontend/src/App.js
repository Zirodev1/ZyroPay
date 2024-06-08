// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegistrationPage from "./pages/RegistrationPage.js";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard.js";
import Footer from "./components/Footer";
import Finances from "./pages/Dashboard/Finances.js";
import SendRequest from "./pages/Dashboard/SendRequest.js"

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/send-request" element={<SendRequest />} />
        </Routes>
      </div>
    </div>
    <Footer/>
  </Router>
);

export default App;
