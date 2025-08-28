import React, { useState } from "react";
import { backend_url } from "../config";

const TEAMS = [
  "Team A",
  "Team B",
  "Team C",
  "Team D",
  "Team E",
  "Team F",
  "Team G",
  "Team H",
  "Team I",
  "Team J",
];

const initialState = {
  playerName: "",
  playerCity: "",
  phone: "",
  playedIn: "",
  playerType: "",
  lastPlayedFor: "",
};

function AddPlayer() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.playerName.trim()) errs.playerName = "Name is required";
    if (!form.playerCity.trim()) errs.playerCity = "Player City is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone))
      errs.phone = "Phone must be 10 digits";
    if (!form.playedIn) errs.playedIn = "Played In is required";
    if (!form.playerType) errs.playerType = "Player Type is required";
    if (!form.lastPlayedFor) errs.lastPlayedFor = "Last Played For is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    try {
      await fetch(`${backend_url}/addPlayer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setMessage("Player registered successfully!");
      setForm(initialState);
    } catch {
      setMessage("Error registering player. Please try again.");
    }
  };

  return (
    <section className="neo-form-section">
      <form
        onSubmit={handleSubmit}
        aria-label="add-player-form"
        className="neo-form-card"
      >
        <h2>Register a New Player</h2>
        <div className="neo-form-row">
          <div className="neo-form-group">
            <label htmlFor="playerName">Player Name:</label>
            <input
              id="playerName"
              name="playerName"
              value={form.playerName}
              onChange={handleChange}
            />
            {errors.playerName && (
              <span className="error">{errors.playerName}</span>
            )}
          </div>
          <div className="neo-form-group">
            <label htmlFor="playerCity">Player City:</label>
            <input
              id="playerCity"
              name="playerCity"
              value={form.playerCity}
              onChange={handleChange}
            />
            {errors.playerCity && (
              <span className="error">{errors.playerCity}</span>
            )}
          </div>
        </div>
        <div className="neo-form-row">
          <div className="neo-form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="neo-form-group">
            <label htmlFor="playedIn">Played In:</label>
            <select
              id="playedIn"
              name="playedIn"
              value={form.playedIn}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Domestic">Domestic</option>
              <option value="International">International</option>
            </select>
            {errors.playedIn && (
              <span className="error">{errors.playedIn}</span>
            )}
          </div>
        </div>
        <div className="neo-form-row">
          <div className="neo-form-group">
            <label htmlFor="playerType">Player Type:</label>
            <select
              id="playerType"
              name="playerType"
              value={form.playerType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
            </select>
            {errors.playerType && (
              <span className="error">{errors.playerType}</span>
            )}
          </div>
          <div className="neo-form-group">
            <label htmlFor="lastPlayedFor">Last Played For:</label>
            {/* Interactive team selection chips */}
            <div
              style={{
                display: "flex",
                gap: "0.5em",
                marginBottom: "0.7em",
                flexWrap: "wrap",
              }}
            >
              {TEAMS.map((team) => (
                <button
                  type="button"
                  key={team}
                  className={
                    "neo-team-chip" +
                    (form.lastPlayedFor === team ? " selected" : "")
                  }
                  style={{
                    border: "1.5px solid",
                    borderColor:
                      form.lastPlayedFor === team ? "#1a7f37" : "#e5e7eb",
                    background:
                      form.lastPlayedFor === team ? "#e0f7e9" : "#fff",
                    color: form.lastPlayedFor === team ? "#1a7f37" : "#232323",
                    borderRadius: "999px",
                    padding: "0.5em 1.2em",
                    fontWeight: 600,
                    fontSize: "1em",
                    cursor: "pointer",
                    outline:
                      form.lastPlayedFor === team
                        ? "2px solid #1a7f37"
                        : "none",
                    boxShadow:
                      form.lastPlayedFor === team
                        ? "0 2px 8px #e0f7e9"
                        : "none",
                    transition: "all 0.15s",
                  }}
                  aria-pressed={form.lastPlayedFor === team}
                  tabIndex={0}
                  onClick={() =>
                    handleChange({
                      target: { name: "lastPlayedFor", value: team },
                    })
                  }
                >
                  {team}
                </button>
              ))}
            </div>
            {/* Keep the select for accessibility and tests */}
            <select
              id="lastPlayedFor"
              name="lastPlayedFor"
              value={form.lastPlayedFor}
              onChange={handleChange}
              style={{ display: "block", width: "100%", marginBottom: "0.2em" }}
            >
              <option value="">Select</option>
              {TEAMS.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
            {errors.lastPlayedFor && (
              <span className="error">{errors.lastPlayedFor}</span>
            )}
          </div>
        </div>
        <button type="submit" className="neo-btn neo-btn-luxury">
          Register Player
        </button>
        {message && <div className="form-message">{message}</div>}
      </form>
    </section>
  );
}

export default AddPlayer;
