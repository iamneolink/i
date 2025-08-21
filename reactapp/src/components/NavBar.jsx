import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Neo Cricket Tournament</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/add" className="navbar-register">
            Register Player
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
