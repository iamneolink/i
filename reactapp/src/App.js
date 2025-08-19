import Navbar from "./components/NavBar";
import ViewPlayer from "./components/ViewPlayer";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<ViewPlayer />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
