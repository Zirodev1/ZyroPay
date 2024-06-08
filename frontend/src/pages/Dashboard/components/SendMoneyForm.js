// src/components/SendMoneyForm.js
import React, { useState } from 'react';

const SendMoneyForm = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    note: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add send money logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          className="form-control"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="note">Note</label>
        <textarea
          className="form-control"
          id="note"
          name="note"
          value={formData.note}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Send Money</button>
    </form>
  );
};

export default SendMoneyForm;
