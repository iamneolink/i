import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar neo-navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Neo Cricket Tournament Registration</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/players" className="navbar-link">
              Players
            </Link>
          </li>
          <li>
            <Link to="/add" className="navbar-link navbar-register">
              Register Player
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
