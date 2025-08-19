import React, { useEffect, useState } from "react";

function ViewPlayer() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/getAllPlayer")
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
      <h2>Registered Players</h2>
      <table className="player-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
            <th>Played-in</th>
            <th>Type</th>
            <th>Last Team</th>
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
                <td>{p.name}</td>
                <td>{p.city}</td>
                <td>{p.phone}</td>
                <td>{p.playedIn}</td>
                <td>{p.type}</td>
                <td>{p.lastTeam}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
