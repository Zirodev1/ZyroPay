// src/pages/SendRequest.js
import React from 'react';
import AuthNavbar from "../../components/AuthNavbar"
import SendMoneyForm from './components/SendMoneyForm';

const SendRequest = () => (
  <>
    <AuthNavbar />
    <div className="container mt-5">
      <h2>Send and Request</h2>
      <SendMoneyForm/>
    </div>
  </>
);

export default SendRequest;
