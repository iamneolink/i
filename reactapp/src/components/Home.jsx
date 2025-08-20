import React from "react";
import AddPlayer from "./AddPlayer";
import cricketImg from "../assets/background.jpg";

function Home() {
  return (
    <div className="home-div">
      <h2>Welcome to Cricket Tournament Registration</h2>
      <img
        src={cricketImg}
        alt="Cricket"
        style={{ maxWidth: "100%", marginBottom: "1rem" }}
      />
      <AddPlayer />
    </div>
  );
}

export default Home;
