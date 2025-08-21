import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-title">Neo Cricket Tournament</div>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/players"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Players
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                "navbar-register " + (isActive ? "active" : "")
              }
            >
              Register Player
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
