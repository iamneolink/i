import { useNavigate } from "react-router-dom";
import cricketImg from "../assets/background.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-content">
      <h2 className="home-welcome">
        Welcome to Cricket Tournament Registration
      </h2>
      <img
        src={cricketImg}
        alt="Players in a Cricket Tournament"
        className="home-image"
      />
      <button
        data-testid="register-btn"
        className="register-btn"
        onClick={() => navigate("/add")}
      >
        Register Player
      </button>
    </main>
  );
}

export default Home;
