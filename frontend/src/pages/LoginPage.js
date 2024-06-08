// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link } from'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className='container mt-5'>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <p>Forgot Password</p>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
      <h3>OR</h3>
      <Link to="/signup">
        <Button variant="outlined" color="secondary">Sign Up</Button>
      </Link>
    </div>
  );
};

export default LoginPage;
