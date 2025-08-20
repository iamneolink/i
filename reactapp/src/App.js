import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ViewPlayer from "./components/ViewPlayer";
import AddPlayer from "./components/AddPlayer";
import Footer from "./components/Footer";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Neo Cricket Tournament Registration</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/add">Register Player</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<ViewPlayer />} />
          <Route path="/add" element={<AddPlayer />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
