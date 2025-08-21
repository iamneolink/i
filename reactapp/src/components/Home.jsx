import { useNavigate } from "react-router-dom";
import cricketImg from "../assets/background.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-bg-wrapper">
      <div
        className="home-bg-blur"
        style={{ backgroundImage: `url(${cricketImg})` }}
      />
      <div className="home-content">
        <h2 className="home-welcome">
          Welcome to Neo Cricket Tournament Registration
        </h2>
        <button className="register-btn" onClick={() => navigate("/add")}>
          Register Player
        </button>
      </div>
    </div>
  );
}

export default Home;
