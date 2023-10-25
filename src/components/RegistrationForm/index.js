// RegistrationForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./index.css";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = { email, phone, password };
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
  <div className="homeLink">    <Link to="/">Home</Link></div>
    </div>
  );
};

export default RegistrationForm;
