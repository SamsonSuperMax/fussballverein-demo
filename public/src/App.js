import React, { useState } from "react";
import "./App.css";

const roles = ["Admin", "Trainer", "Spieler", "Eltern", "Sponsor"];

export default function App() {
  const [role, setRole] = useState("");

  if (!role) {
    return (
      <div className="center">
        <h1>Demo‑Login Vereins‑App</h1>
        <select onChange={e => setRole(e.target.value)} defaultValue="">
          <option value="" disabled>Wähle deine Rolle</option>
          {roles.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Willkommen, {role}</h1>
      <p>Dashboard‑Inhalte für {role} folgen.</p>
    </div>
  );
}
