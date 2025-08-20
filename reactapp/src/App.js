
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import ViewPlayer from "./components/ViewPlayer";
import AddPlayer from "./components/AddPlayer";
import Footer from "./components/Footer";

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
