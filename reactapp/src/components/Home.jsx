import { useNavigate } from "react-router-dom";
import cricketImg from "../assets/background.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-content">
      <h2 className="home-welcome">
        Welcome to Cricket Tournament Registration
      </h2>
      <img src={cricketImg} alt="Cricket Tournament" />
      <button className="register-btn" onClick={() => navigate("/add")}>
        Register Player
      </button>
    </div>
  );
}

export default Home;
