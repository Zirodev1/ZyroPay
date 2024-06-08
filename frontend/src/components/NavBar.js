// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="container-nav">
      <Link className="navbar-brand" to="/">ZyroPay</Link>
      <div className="navbar-links">
        <div className="dropdown">
          <Link className="nav-link" to="#">Personal</Link>
          <div className="dropdown-content">
            <div className="dropdown-column">
              <h6 className="dropdown-header">Shopping & Rewards</h6>
              <Link className="dropdown-item" to="#">Buy Now, Pay Later</Link>
              <Link className="dropdown-item" to="#">Rewards</Link>
              <Link className="dropdown-item" to="#">Credit and Cards</Link>
              <Link className="dropdown-item" to="#">Paying with ZyroPay</Link>
            </div>
            <div className="dropdown-column">
              <h6 className="dropdown-header">Send & Receive</h6>
              <Link className="dropdown-item" to="#">Send Money</Link>
              <Link className="dropdown-item" to="#">Request Money</Link>
              <Link className="dropdown-item" to="#">Donate and Raise Funds</Link>
              <Link className="dropdown-item" to="#">Start Selling</Link>
            </div>
            <div className="dropdown-column">
              <h6 className="dropdown-header">Manage Your Money</h6>
              <Link className="dropdown-item" to="#">Add Cards and Banks</Link>
              <Link className="dropdown-item" to="#">Security and Safety</Link>
              <Link className="dropdown-item" to="#">Set up Direct Deposit</Link>
              <Link className="dropdown-item" to="#">Add Cash</Link>
              <Link className="dropdown-item" to="#">Pay Bills</Link>
              <Link className="dropdown-item" to="#">Savings and Goals</Link>
              <Link className="dropdown-item" to="#">Cryptocurrency</Link>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <Link className="nav-link" to="#">Small Business</Link>
          <div className="dropdown-content">
            <div className="dropdown-column">
              <h6 className="dropdown-header">Business Tools</h6>
              <Link className="dropdown-item" to="#">Invoicing</Link>
              <Link className="dropdown-item" to="#">Payments</Link>
              <Link className="dropdown-item" to="#">Capital</Link>
            </div>
            <div className="dropdown-column">
              <h6 className="dropdown-header">Manage Business</h6>
              <Link className="dropdown-item" to="#">Employee Management</Link>
              <Link className="dropdown-item" to="#">Tax Tools</Link>
              <Link className="dropdown-item" to="#">Business Cards</Link>
            </div>
          </div>
        </div>
        <Link className="nav-link" to="/enterprise">Enterprise</Link>
        <Link className="nav-link" to="/developer">Developer</Link>
      </div>
      <div className="auth-links">
        <Link className="nav-link" to="/whats-new">What's New</Link>
        <Link className="nav-link" to="/help">Help</Link>
        <Link className="nav-link" to="/login">Log In</Link>
        <Link className="nav-link btn" to="/signup">Sign Up</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;