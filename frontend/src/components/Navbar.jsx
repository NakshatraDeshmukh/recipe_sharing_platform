import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand brand-text" to="/">QUICKDel</Link> {/* Link instead of <a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> {/* Fixed navigation */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link> {/* Add About route later */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link> {/* Add Contact route later */}
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn login-btn me-2" to="/login">Login</Link> 
            <Link className="btn register-btn" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
