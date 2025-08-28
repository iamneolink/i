import React, { useEffect, useState } from "react";
import { backend_url } from "../config";
function ViewPlayer() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${backend_url}/getAllPlayer`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch players");
        return res.json();
      })
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load players. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="player-table-container neo-card neo-loading">
        <p>All Players</p>
        <div className="loading">Loading players...</div>
      </div>
    );
  if (error) return <div className="error neo-card">{error}</div>;

  return (
    <section className="player-table-container neo-card">
      <h2>Players</h2>
      <div className="neo-table-wrapper">
        <table className="player-table neo-table">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Player City</th>
              <th>Phone</th>
              <th>Played In</th>
              <th>Player Type</th>
              <th>Last Played For</th>
            </tr>
          </thead>
          <tbody>
            {players.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center" }}>
                  No players registered yet.
                </td>
              </tr>
            ) : (
              players.map((p, i) => (
                <tr key={i}>
                  <td>{p.playerName}</td>
                  <td>{p.playerCity}</td>
                  <td>{p.phone}</td>
                  <td>{p.playedIn}</td>
                  <td>{p.playerType}</td>
                  <td>{p.lastPlayedFor}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ViewPlayer;
