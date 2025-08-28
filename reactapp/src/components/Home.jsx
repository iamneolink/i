import { useNavigate } from "react-router-dom";
import cricketImg from "../assets/background.jpg";

function Home() {
  return (
    <main className="home-content neo-hero">
      <img
        src={cricketImg}
        alt="Players in a Cricket Tournament"
        className="home-image neo-hero-bg"
      />
      <div className="neo-hero-overlay">
        <h2 className="home-welcome neo-hero-title">
          Welcome to Cricket Tournament Registration
        </h2>
        <p className="neo-hero-desc">
          A premium platform for seamless cricket tournament management.
        </p>
      </div>
    </main>
  );
}

export default Home;
