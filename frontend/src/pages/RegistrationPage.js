// src/pages/RegistrationPage.js
import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import "./styles/RegistrationPage.css";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <>
       <Navbar />
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sign up for ZyroPay</h2>
      <h3 className="text-center mb-4">The secure way to pay and get paid.</h3>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="signup-option selected">
                    <h4>Personal</h4>
                    <ul>
                      <li>Shop online without sharing your payment info</li>
                      <li>Access exclusive rewards and cash back</li>
                      <li>Manage money, discover crypto, and more</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="signup-option">
                    <h4>Business</h4>
                    <ul>
                      <li>Accept more forms of payment so you don’t miss a sale</li>
                      <li>Easily integrate with the tools you use to run your business</li>
                      <li>Sell securely with a brand customers trust</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link to="/signup-form" className="btn btn-primary btn-lg">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegistrationPage;
