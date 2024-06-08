// src/components/AuthNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AuthNavbar.css';

const AuthNavbar = () => (
    <nav className="auth-navbar navbar navbar-expand-lg">
      <div className="container-xxl">
        <Link className="navbar-brand" to="/dashboard">
          <img src="/path/to/logo.png" alt="ZyroPay" className="navbar-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/finances">Finances</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/send-request">Send and Request</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rewards">Rewards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wallet">Wallet</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/activity">Activity</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">Help</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/notifications">
                <i className="bi bi-bell"></i>
                <span className="badge bg-danger">13</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                <i className="bi bi-gear"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">LOG OUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
  export default AuthNavbar;
