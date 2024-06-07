import React from 'react';
import { Link } from'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const LandingPage = () => (
    <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>Welcome to ZyroPay</Typography>
    <Typography variant="h5" gutterBottom>Your gateway to secure and easy payments.</Typography>
    <Link to="/signup">
      <Button variant="contained" color="primary">Sign Up</Button>
    </Link>
    <Link to="/login">
      <Button variant="outlined" color="secondary">Login</Button>
    </Link>
    </Container>
);

export default LandingPage;