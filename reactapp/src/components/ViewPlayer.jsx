import React, { useEffect, useState } from "react";

function ViewPlayer() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/getAllPlayer", {
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

  if (loading) return <div>Loading players...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2>All Players</h2>
      <table className="player-table">
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
  );
}

export default ViewPlayer;
