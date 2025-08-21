import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import ViewPlayer from "./components/ViewPlayer";
import AddPlayer from "./components/AddPlayer";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="app-flex-wrapper">
        <Navbar />
        <div className="container" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<ViewPlayer />} />
            <Route path="/add" element={<AddPlayer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
