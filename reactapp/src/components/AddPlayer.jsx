// ...existing code...

import React, { useState } from "react";

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
      await fetch("/addPlayer", {
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
    <form onSubmit={handleSubmit} aria-label="add-player-form">
      <h2>Register a New Player</h2>
      <div>
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
      <div>
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
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div>
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
        {errors.playedIn && <span className="error">{errors.playedIn}</span>}
      </div>
      <div>
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
      <div>
        <label htmlFor="lastPlayedFor">Last Played For:</label>
        <select
          id="lastPlayedFor"
          name="lastPlayedFor"
          value={form.lastPlayedFor}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
        </select>
        {errors.lastPlayedFor && (
          <span className="error">{errors.lastPlayedFor}</span>
        )}
      </div>
      <button type="submit">Register Player</button>
      {message && <div className="form-message">{message}</div>}
    </form>
  );
}

export default AddPlayer;
