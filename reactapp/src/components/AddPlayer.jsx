import React, { useState } from "react";

/**
 * AddPlayer component
 * Renders a player registration form with validation.
 * On successful submission, sends data to the backend API (/addPlayer).
 */
const initialState = {
  name: "",
  city: "",
  phone: "",
  playedIn: "",
  type: "",
  lastTeam: "",
};

function AddPlayer({ onSuccess }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Validate form fields
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.city.trim()) errs.city = "City is required";
    if (!/^\d{10}$/.test(form.phone))
      errs.phone = "Valid 10-digit phone required";
    if (!form.playedIn.trim()) errs.playedIn = "Played-in is required";
    if (!form.type) errs.type = "Type is required";
    return errs;
  };

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setMessage("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/addPlayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to register player");
      setMessage("Player registered successfully!");
      setForm(initialState);
      if (onSuccess) onSuccess();
    } catch {
      setMessage("Error registering player. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="player-form" noValidate>
      <h2>Register New Player</h2>
      <div>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
      <div>
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div>
        <input
          name="playedIn"
          placeholder="Played-in (e.g. School, Club)"
          value={form.playedIn}
          onChange={handleChange}
        />
        {errors.playedIn && <span className="error">{errors.playedIn}</span>}
      </div>
      <div>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
          <option value="All-rounder">All-rounder</option>
          <option value="Wicketkeeper">Wicketkeeper</option>
        </select>
        {errors.type && <span className="error">{errors.type}</span>}
      </div>
      <div>
        <input
          name="lastTeam"
          placeholder="Last Team"
          value={form.lastTeam}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register Player</button>
      {message && <div className="form-message">{message}</div>}
    </form>
  );
}

export default AddPlayer;
