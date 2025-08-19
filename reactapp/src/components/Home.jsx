import React from "react";
// import PlayerForm from "./PlayerForm";
import AddPlayer from "./AddPlayer";
function Home() {
  return (
    <div>
      <h2>Welcome to Neo Cricket Tournament Registration</h2>
      <p>Register a new player quickly below:</p>
      <AddPlayer />
    </div>
  );
}

export default Home;
