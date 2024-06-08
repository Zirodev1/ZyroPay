// src/pages/Dashboard.js
import React from 'react';
import AuthNavbar from "../components/AuthNavbar"

const Dashboard = () => (
  <>
    <AuthNavbar/>
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard. Here you can manage your account and transactions.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Account Balance</h5>
              <p className="card-text">$0.00</p>
              <button className="btn btn-primary">Add Funds</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Recent Transactions</h5>
              <p className="card-text">No recent transactions</p>
              <button className="btn btn-secondary">View All</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <button className="btn btn-success mb-2">Send Money</button>
              <button className="btn btn-warning">Request Money</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Dashboard;
