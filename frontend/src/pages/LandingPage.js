import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar"
import "./styles/main.css"

const LandingPage = () => (
  <>
    <Navbar />
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to ZyroPay</h1>
        <p className="lead">Your gateway to secure and easy payments.</p>
        <hr className="my-4" />
        <p>Join us and manage your payments effortlessly.</p>
        <Link to="/signup" className="btn btn-primary btn-lg mr-2" role="button">Sign Up</Link>
        <Link to="/login" className="btn btn-secondary btn-lg" role="button">Login</Link>
      </div>
    </div>
  </>
);

export default LandingPage;
